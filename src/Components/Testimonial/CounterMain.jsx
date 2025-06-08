// src/Design.js
import React from 'react';
import { FaBriefcase, FaThumbsUp, FaTrophy } from 'react-icons/fa';
import Counter from './Counter';



const CounterMain = () => {
  const counters = [
    { icon: <FaBriefcase />, number: "1450", text: "Projects Succeed" },
    { icon: <FaThumbsUp />, number: "1864", text: "Peoples Likes" },
    { icon: <FaTrophy />, number: "1280", text: "Awards Achieved" },
    { icon: <FaTrophy />, number: "1280", text: "Awards Achieved" }
  ];

  return (
    <div className="bg-gray-900 py-32">
      <div className="container mx-auto flex justify-around">
        {counters.map((counter, index) => (
          <Counter key={index} icon={counter.icon} number={counter.number} text={counter.text} />
        ))}
      </div>
    </div>
  );
};

export default CounterMain;