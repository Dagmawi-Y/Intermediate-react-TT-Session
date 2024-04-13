import React, { useState } from 'react';
import './1-color-changer.css';
// This component demonstrates state and event handling
const ColorChanger = () => {
  // The useState hook is used to create a state variable for the background color
  const [color, setColor] = useState('#ffffff');

  // Event handler function to change the background color to a random color
  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div className="color-changer" style={{ backgroundColor: color }}>
      <h2>Change Background Color</h2>
      <button onClick={changeColor} className="button">
        Change Color
      </button>
    </div>
  );
};

export default ColorChanger;
