import React, { useState } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

function App() {

  const [tailNumber, setTailNumber] = useState('');
  const [remainingFuel, setRemainingFuel] = useState('');
  const [specificGravity, setSpecificGravity] = useState('0.88');
  const [finalFuelState, setFinalFuelState] = useState('');
  const [deliveredFuel, setDeliveredFuel] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSliderChange = (event) => {
    setSpecificGravity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Engineering Fuel Calculator</h1>
      <Cockpit 
        submitted={submitted}
        setSubmitted={setSubmitted}
        tailNumber={tailNumber}
        setTailNumber={setTailNumber}
        remainingFuel={remainingFuel}
        setRemainingFuel={setRemainingFuel}
        specificGravity={specificGravity}
        handleSliderChange={handleSliderChange}
        finalFuelState={finalFuelState}
        setFinalFuelState={setFinalFuelState}
        deliveredFuel={deliveredFuel}
        setDeliveredFuel={setDeliveredFuel} />
    </div>
  );
}

export default App;
