import React, { useState } from 'react';
import './App.css';
import Discrepancy from '../components/Discrepancy/Discrepancy';
import InputForm from '../components/InputForm/InputForm';

function App() {

  const [remainingFuel, setRemainingFuel] = useState('');
  const [specificGravity, setSpecificGravity] = useState('0.888');
  const [finalFuelState, setFinalFuelState] = useState('');
  const [deliveredFuel, setDeliveredFuel] = useState('');

  const handleSliderChange = (event) => {
    setSpecificGravity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Engineering Fuel Calculator</h1>
      <InputForm 
        remainingFuel={remainingFuel}
        setRemainingFuel={setRemainingFuel}
        specificGravity={specificGravity}
        handleSliderChange={handleSliderChange}
        finalFuelState={finalFuelState}
        setFinalFuelState={setFinalFuelState}
        deliveredFuel={deliveredFuel}
        setDeliveredFuel={setDeliveredFuel} /> 
      <Discrepancy 
        remainingFuel={remainingFuel} 
        specificGravity={specificGravity}
        finalFuelState={finalFuelState}
        deliveredFuel={deliveredFuel} />
    </div>
  );
}

export default App;
