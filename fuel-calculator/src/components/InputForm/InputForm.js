import React from "react";
import "./InputForm.css";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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
    document.getElementById("remFuel").focus();
  };

  const remFuelEnterHandler = () => {
    document.getElementById("finFuel").focus();
  };

  const finFuelEnterHandler = () => {
    document.getElementById("fuelIn").focus();
  };

  const fuelInEnterHandler = () => {
    preventNaNHandler();
  };

  const storedAircraftButtonHandler = props.storedAircraftButtonHandler;

  return (
    <div className="input-cont">
      <div className="content-wrapper">
        <h1>Enter Details</h1>
        <Paper className="input-box">
          <span className="input-box-item">
            <label htmlFor="tail-number">A/C Tail Number</label>
          </span>
          <br />
          <span className="input-box-item">
            <input
              name="tail-number"
              id="tailNumber"
              type="text"
              className="text-input"
              value={props.tailNumber}
              onChange={e => props.setTailNumber(e.target.value)}
              onKeyPress={e => handleKeyPress(e, tailNumEnterHandler)}
            />
          </span>
        </Paper>
        <Paper
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
            type="number"
            className="text-input"
            value={props.remainingFuel}
            onChange={e => props.setRemainingFuel(e.target.value)}
            onKeyPress={e => handleKeyPress(e, remFuelEnterHandler)}
          />
          Kg
        </Paper>
        <Paper className="input-box slidecontainer">
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
        </Paper>
        <Paper
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
            type="number"
            id="finFuel"
            className="text-input"
            value={props.finalFuelState}
            onChange={e => props.setFinalFuelState(e.target.value)}
            onKeyPress={e => handleKeyPress(e, finFuelEnterHandler)}
          />
          Kg
        </Paper>
        <Paper
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
            type="number"
            id="fuelIn"
            className="text-input"
            value={props.deliveredFuel}
            onChange={e => props.setDeliveredFuel(e.target.value)}
            onKeyPress={e => handleKeyPress(e, fuelInEnterHandler)}
          />
          Lts
        </Paper>
      </div>
      <footer>
        <div className="button-wrapper">
          {storedAircraftButtonHandler()}
          <Button
            className="buttons"
            variant="contained"
            color="primary"
            onClick={preventNaNHandler}
          >
            Submit
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default inputForm;
