import React, { useState, useEffect } from 'react';
import './FormWithTimer.css';

const FormWithTimer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    shippingAddress: '',
  });
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [submitted, setSubmitted] = useState(false);
  const [timeout, setTimeout] = useState(false);

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (timeLeft > 0) {
      setSubmitted(true);
      setTimeout(false);
      console.log('Form Data:', formData); // Print the form data to the console
      alert(`Form Data: Full Name - ${formData.fullName}, Contact Number - ${formData.contactNumber}, Shipping Address - ${formData.shippingAddress}`); // Alert the form data

    } else {
      setTimeout(true);
      setSubmitted(false);
    }
  };

  if (submitted) {
    return <div>Thank you for your submission!</div>;
  }

  if (timeout) {
    return <div>Timeout. The cart has timed-out. Please try again!</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Number
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Shipping Address
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>You have {Math.floor(timeLeft / 60)} Minutes, {timeLeft % 60} Seconds, before confirming order</p>
    </div>
  );
};

export default FormWithTimer;
