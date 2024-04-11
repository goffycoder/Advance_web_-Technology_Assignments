import React, { useState } from 'react';
import "./App.css";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [inputError, setInputError] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setInputError('Invalid email address');
      return;
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setInputError('Invalid mobile number (10 digits only)');
      return;
    }

    // Name validation
    if (name.length < 5) {
      setInputError('Name must be at least 5 characters');
      return;
    }

    // All validations passed
    setInputError(null);
    alert(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSelected Option: ${selectedOption}\nCheckbox 1 is checked: ${isChecked1}\nCheckbox 2 is checked: ${isChecked2}\nCheckbox 3 is checked: ${isChecked3}`);
    console.log(`Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSelected Option: ${selectedOption}\nCheckbox 1 is checked: ${isChecked1}\nCheckbox 2 is checked: ${isChecked2}\nCheckbox 3 is checked: ${isChecked3}`);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {inputError && <div style={{ color: 'red' }}>{inputError}</div>}

      <label>Enter your email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Enter your mobile number:</label>
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <label>Select an option:</label>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={isChecked1}
          onChange={handleCheckboxChange1}
        />
        Checkbox 1
      </label>

      <label>
        <input
          type="checkbox"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
        Checkbox 2
      </label>

      <label>
        <input
          type="checkbox"
          checked={isChecked3}
          onChange={handleCheckboxChange3}
        />
        Checkbox 3
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
