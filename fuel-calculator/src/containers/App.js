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

  const roundedNum = (num) => {
    return num.toFixed(2);
  }

  const deliveredFuelKg = roundedNum(deliveredFuel * specificGravity); 

  const setShowStoredAircraftHandler = () => {
    if (showStoredAircraft) {
      setShowStoredAircraft(false);
    } else if (showStoredAircraft === false) {
      setShowStoredAircraft(true);
    }
  };

  const refuseEmptyStoredAircraftHandler = () => {
    if (storedAircraft !== '') {
      return setShowStoredAircraftHandler();
    } else {
      return alert('No Stored Aircraft');
    }
  };

  const handleSliderChange = (event) => {
    setSpecificGravity(event.target.value);
  };

  const resetApp = () => {
    setShowStoredAircraft(false);
    setStoredAircraft('');
    setTailNumber('');
    setRemainingFuel('');
    setSpecificGravity('0.88');
    setFinalFuelState('');
    setDeliveredFuel('');
    setSubmitted(false);
  }

  const saveDetailsHandler = () => {
    setStoredAircraft(storedAircraft => [...storedAircraft, [
      'Tail Number: ' + tailNumber + '. ', 'Fuel Remaining: ' + remainingFuel + 'Kg. ', 'Specific Gravity: ' + specificGravity + '. ', 
      'Fuel Put In: ' + deliveredFuelKg + 'Kg. ', 'Total A/C: ' + finalFuelState + 'Kg. ', 'Discrepancy: ' + discrepancy + '%.']]);
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
        setDiscrepancy={setDiscrepancy}
        roundedNum={roundedNum}
        refuseEmptyStoredAircraftHandler={refuseEmptyStoredAircraftHandler}
        resetApp={resetApp} />
    </div>
  );
};

export default App;
