import React, { useState, useMemo } from "react";

export default function CalculateFactorial() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const factorial = useMemo(() => factorialOf(number), [number]);

    const onChange = event => {
        setNumber(Number(event.target.value));
    }

    const counterHandler = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={counterHandler}>Counter</button>
            <div>Counter: {counter}</div>
        </div>
    );
}

function factorialOf(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
