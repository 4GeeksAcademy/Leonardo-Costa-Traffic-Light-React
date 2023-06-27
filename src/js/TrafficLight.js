import React, { useState } from 'react';
import './index.css';

//state to track the active light
const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);

  // function to handle click event on lights
  const handleClick = (light) => {

    //toggle the active light state
    setActiveLight((prevLight) => (prevLight === light ? null : light));
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => handleClick('red')}
      />
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => handleClick('yellow')}
      />
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => handleClick('green')}
      />
    </div>
  );
};

export default TrafficLight;
