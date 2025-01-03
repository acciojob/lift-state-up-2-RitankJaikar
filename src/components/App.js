import React, { useState } from 'react';
import Child from './Child';

const App = () => {
  const [inputValue, setInputValue] = useState(''); // State to hold the value of the input

  // Method to handle the change of input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="parent">
      <h1>Lift State Up Example</h1>
      {/* Passing inputValue and handleInputChange as props to Child */}
      <Child 
        inputValue={inputValue} 
        onInputChange={handleInputChange} 
      />
    </div>
  );
}

export default App;
