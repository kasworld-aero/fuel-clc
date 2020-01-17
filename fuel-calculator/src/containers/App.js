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
  const [storedAircraft, setStoredAircraft] = useState('');
  const [showStoredAircraft, setShowStoredAircraft] = useState(false);
  const [discrepancy, setDiscrepancy] = useState('');

  const setShowStoredAircraftHandler = () => {
    if (showStoredAircraft) {
      setShowStoredAircraft(false);
    } else if (showStoredAircraft === false) {
      setShowStoredAircraft(true);
    }
  };

  const handleSliderChange = (event) => {
    setSpecificGravity(event.target.value);
  };

  //! Will need to re-add discrepancy once made global state. 
  const saveDetailsHandler = () => {
    setStoredAircraft(storedAircraft => [...storedAircraft, [tailNumber, remainingFuel, specificGravity, deliveredFuel, finalFuelState, discrepancy + '%']]);
    setTailNumber('');
    setRemainingFuel('');
    setSpecificGravity('0.88');
    setFinalFuelState('');
    setDeliveredFuel('');
    setSubmitted(false);
  };

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
        setDeliveredFuel={setDeliveredFuel}
        storedAircraft={storedAircraft}
        setStoredAircraft={setStoredAircraft}
        showStoredAircraft={showStoredAircraft}
        setShowStoredAircraft={setShowStoredAircraftHandler}
        saveDetailsHandler={saveDetailsHandler}
        discrepancy={discrepancy}
        setDiscrepancy={setDiscrepancy} />
    </div>
  );
};

export default App;
