// src/components/Counter.js
import React, { useEffect, useState } from 'react';

const Counter = ({ icon, number, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 4)); // The final number

    if (start === end) return; // Exit if numbers match

    let totalDuration = 2000; // Animation duration in milliseconds
    let incrementTime = (totalDuration / end) * 100;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number]);

  return (
    <div className="text-center font-rajdhani">
      <div className="text-orange-500 text-7xl mb-6 px-9">{icon}</div>
      <div className="text-white text-6xl font-bold">{count}</div>
      <p className="text-white font-bold text-lg  mt-6">{text}</p>
    </div>
  );
};

export default Counter;