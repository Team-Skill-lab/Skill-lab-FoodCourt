// src/ToggleSwitch.js
import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={toggleSwitch}>
      <div className={`switch ${isOn ? 'on' : 'off'}`} />
    </div>
  );
};

export default ToggleSwitch;
