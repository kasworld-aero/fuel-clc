/** 
 * Todo Sort out styling - use css grid as opposed to current layout to make a more responsive UI
 * ? Is it worth changing specific gravity to a slider as opposed to input?
 * ? It is worth refactoring the form into it's own component?
*/

import React, { useState } from 'react';
import './App.css';
import Discrepancy from '../components/Discrepancy';

function App() {

  const [remainingFuel, setRemainingFuel] = useState('');
  const [specificGravity, setSpecificGravity] = useState('');
  const [finalFuelState, setFinalFuelState] = useState('');
  const [deliveredFuel, setDeliveredFuel] = useState('');

  return (
    <div className="App">
      <h1>Engineering Fuel Calculator</h1>
      <form>
        <div className='input-box'>
          <label>Aircraft Remaining Fuel<br /></label> 
          <input
            type='text'
            value={remainingFuel}
            onChange={e => setRemainingFuel(e.target.value)}
          />Kg
        </div>
        <div className='input-box'>
          <label>Specific Gravity<br /></label>
          <input   
            type='text'
            value={specificGravity}
            onChange={e => setSpecificGravity(e.target.value)} />
        </div>
        <div className='input-box'>
          <label>Aircraft Final Fuel State<br /></label>
          <input 
            type='text'
            value={finalFuelState}
            onChange={e => setFinalFuelState(e.target.value)} />Kg
        </div>
        <div className='input-box'>
          <label>Delivered Fuel<br /></label>
          <input 
            type='text'
            value={deliveredFuel}
            onChange={e => setDeliveredFuel(e.target.value)} />Lts
        </div>
      </form>
      <Discrepancy 
        remainingFuel={remainingFuel} 
        specificGravity={specificGravity}
        finalFuelState={finalFuelState}
        deliveredFuel={deliveredFuel} />
    </div>
  );
}

export default App;
