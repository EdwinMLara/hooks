import React, { useState } from "react";

const CounterUseState: React.FC = () => {
    const [count, setCount] = useState<number>(1);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Usestate with a number as parameter</h2>
            <h3>Counter: {count}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    ); 
}

export default CounterUseState;
