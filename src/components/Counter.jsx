"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [number , setNumber] = useState(0);

    console.log("Hello from Counter Client-component")
    return (
        <div>
            <h1>CounterPage</h1>
            <h2>{number}</h2>
            <button onClick={()=>setNumber(number+1)}>Add</button>
            <button onClick={()=>setNumber(number-1)}>Deduct</button>
        </div>
    );
};

export default Counter;