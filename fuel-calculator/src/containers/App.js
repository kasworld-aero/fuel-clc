import React, { useState } from 'react';
import './App.css';

function App() {

  const [remainingFuel, setRemainingFuel] = useState('');
  const [specificGravity, setSpecificGravity] = useState('');
  const [finalFuelState, setFinalFuelState] = useState('');
  const [deliveredFuel, setDeliveredFuel] = useState('');

  return (
    <div className="App">
      <h1>Enginnering Fuel Calculator</h1>
      <form>
        Aircraft Remaining Fuel (Kg) <input
          type='text'
          value={remainingFuel}
          onChange={e => setRemainingFuel(e.target.value)}
        /> <br />
        Specific Gravity <input 
          type='text'
          value={specificGravity}
          onChange={e => setSpecificGravity(e.target.value)} /><br />
        Aircraft Final Fuel State (Kg) <input 
          type='text'
          value={finalFuelState}
          onChange={setFinalFuelState} /><br />
        Delivered Fuel (Lts) <input 
          type='text'
          value={} /><br />
        <span id='disc-box'>Discrepancy <input type='text' placeholder='0%' /><br /></span>
      </form>
    </div>
  );
}

export default App;
