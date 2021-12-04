import React from "react";

const Slider = ({ min, max, value, handleChange }) => {
  return (
    <div className="slider-container">
      <input
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        type="range"
        className="slider"
      />
    </div>
  );
};

export default Slider;
