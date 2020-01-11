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
        Aircraft Remaining Fuel<br /> <input
          type='text'
          value={remainingFuel}
          onChange={e => setRemainingFuel(e.target.value)}
        />Kg<br />
        Specific Gravity<br /> <input   
          type='text'
          value={specificGravity}
          onChange={e => setSpecificGravity(e.target.value)} /><br />
        Aircraft Final Fuel State<br /><input 
          type='text'
          value={finalFuelState}
          onChange={e => setFinalFuelState(e.target.value)} />Kg<br />
        Delivered Fuel<br /><input 
          type='text'
          value={deliveredFuel}
          onChange={e => setDeliveredFuel(e.target.value)} />Lts<br />
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
