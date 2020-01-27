import React from "react";
import "./InputForm.css";

const inputForm = props => {
  const preventNaNHandler = () => {
    if (
      isNaN(props.remainingFuel) ||
      isNaN(props.deliveredFuel) ||
      isNaN(props.finalFuelState)
    ) {
      return alert("Invalid Input");
    } else {
      return props.onClickHandler();
    }
  };

  const handleKeyPress = (e, func) => {
    if (e.key === "Enter") {
      return func();
    }
  };

  const tailNumEnterHandler = () => {
    document.getElementById('remFuel').focus();
  };

  const remFuelEnterHandler = () => {
    document.getElementById('finFuel').focus();
  };

  const finFuelEnterHandler = () => {
    document.getElementById("fuelIn").focus();
  };

  const fuelInEnterHandler = () => {
    preventNaNHandler();
  };

  /**
   * ! Need to get input form to focus on first input, currently not working
     useEffect(() => {
     document.getElementById('tailNumber').focus()
   });
   */
  
  return (
    <div className="input-cont">
      <h2>Enter Details</h2>
      <form>
        <div className="input-box">
          <label htmlFor="tail-number">
            A/C Tail Number
            <br />
          </label>
          <input
            name="tail-number"
            id="tailNumber"
            type="text"
            value={props.tailNumber}
            onChange={e => props.setTailNumber(e.target.value)}
            onKeyPress={e => handleKeyPress(e, tailNumEnterHandler)}
          />
        </div>
        <div
          className={
            isNaN(props.remainingFuel) ? "input-box rejected" : "input-box"
          }
        >
          <label htmlFor="remaining-fuel">
            Fuel Remaining (A/C Gauges)
            <br />
          </label>
          <input
            name="remaining-fuel"
            id="remFuel"
            type="text"
            value={props.remainingFuel}
            onChange={e => props.setRemainingFuel(e.target.value)}
            onKeyPress={e => handleKeyPress(e, remFuelEnterHandler)}
          />
          Kg
        </div>
        <div className="input-box slidecontainer">
          <label htmlFor="specific-gravity">
            Specific Gravity
            <br />
          </label>
          <input
            name="specific-gravity"
            type="range"
            min="0.7"
            max="0.88"
            defaultValue={props.specificGravity}
            onChange={props.handleSliderChange}
            className="slider"
            step="0.01"
            id="myRange"
          />
          <label id="spec-gravity-output">{props.specificGravity}</label>
        </div>
        <div
          className={
            isNaN(props.finalFuelState) ? "input-box rejected" : "input-box"
          }
        >
          <label htmlFor="final-fuelstate">
            Total A/C
            <br />
          </label>
          <input
            name="final-fuelstate"
            type="text"
            id="finFuel"
            value={props.finalFuelState}
            onChange={e => props.setFinalFuelState(e.target.value)}
            onKeyPress={e => handleKeyPress(e, finFuelEnterHandler)}
          />
          Kg
        </div>
        <div
          className={
            isNaN(props.deliveredFuel) ? "input-box rejected" : "input-box"
          }
        >
          <label htmlFor="delivered-fuel">
            Fuel Put In (Source Gauges)
            <br />
          </label>
          <input
            name="delivered-fuel"
            type="text"
            id="fuelIn"
            value={props.deliveredFuel}
            onChange={e => props.setDeliveredFuel(e.target.value)}
            onKeyPress={e => handleKeyPress(e, fuelInEnterHandler)}
          />
          Lts
        </div>
      </form>
      <button onClick={props.refuseEmptyStoredAircraftHandler}>
        Stored Details
      </button>
      <button onClick={preventNaNHandler}>Submit</button>
    </div>
  );
};

export default inputForm;
