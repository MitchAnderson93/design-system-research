import React from 'react';
import './App.css';
import '@myorg/button/index.js';

function App() {
  function handleButtonClick() {
    console.log('Button clicked!');
  }

  return (
    <div className="App">
      <button qld-button="true" label="Click me" onClick={handleButtonClick}>Test instance</button>
    </div>
  );
}

export default App;