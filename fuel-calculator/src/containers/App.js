/** 
 * Todo Stop dicrepancy showing answer until all inputs filled out 
 * Todo 
 * Todo Styling - use css grid as opposed to current layout to make a more responsive UI
 * todo media queries.
 * ? Refactor the form into it's own component?
*/

import React, { useState } from 'react';
import './App.css';
import Discrepancy from '../components/Discrepancy';

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
      <form>
        <div className='input-box'>
          <label htmlFor='remaining-fuel'>Aircraft Remaining Fuel<br /></label> 
          <input
            name='remaining-fuel'
            type='text'
            value={remainingFuel}
            onChange={e => setRemainingFuel(e.target.value)}
          />Kg
        </div>
        <div className='input-box slidecontainer'>
          <label htmlFor='specific-gravity'>Specific Gravity<br /></label>
          <input 
            name='specific-gravity'
            type='range' 
            min='0.7' 
            max='0.888' 
            defaultValue={specificGravity} 
            onChange={handleSliderChange}
            className='slider'
            step='0.001'  
            id='myRange' /> {specificGravity}
          {/* //? Refactor for slider 
          <input   
            type='text'
            value={specificGravity}
            onChange={e => setSpecificGravity(e.target.value)} /> */}
        </div>
        <div className='input-box'>
          <label htmlFor='final-fuelstate'>Aircraft Final Fuel State<br /></label>
          <input 
            name='final-fuelstate' 
            type='text'
            value={finalFuelState}
            onChange={e => setFinalFuelState(e.target.value)} />Kg
        </div>
        <div className='input-box'>
          <label htmlFor='delivered-fuel'>Delivered Fuel<br /></label>
          <input 
            name='delivered-fuel' 
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
