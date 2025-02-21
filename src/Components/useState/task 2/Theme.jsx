import React, { useState } from 'react';
import './theme.css';
 
const ThemeChanger = () => {
 
const [color, setColor] = useState(0);
const colors = ['white', 'black'];
 
const changeColor = () => {

    setColor((prevIndex) => (prevIndex + 1) % colors.length);
};
 
  return (
    <div className="container" style={{ backgroundColor: colors[color],color:colors[color-1] }}>
      <h1>Hello World</h1>
      <button onClick={changeColor}>Change Theme</button>
    </div>
  );
}

export default ThemeChanger;
 