import React, {useState} from 'react';
import './App.css';

function App() {

  const [remainingFuel, setRemainingFuel] = useState(0);

  return (
    <div className="App">
      <h1>Enginnering Fuel Calculator</h1>
      <form>
        Aircraft Remaining Fuel (Kg) <input type='text' /> <br />
        Specific Gravity <input type='text' /><br />
        Aircraft Final Fuel State (Kg) <input type='text' /><br />
        Delivered Fuel (Lts) <input type='text' /><br />
        <span id='disc-box'>Discrepancy <input type='text' placeholder='0%' /><br /></span>
      </form>
    </div>
  );
}

export default App;
