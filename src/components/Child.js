import React from 'react';

const Child = ({ inputValue, onInputChange }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      {/* Input field where the value is passed as a prop */}
      <input
        type="text"
        value={inputValue}  // Controlled input, value comes from parent state
        onChange={onInputChange}  // Handler passed from parent to update state
      />
      <p>Typed Value: {inputValue}</p>
    </div>
  );
}

export default Child;
