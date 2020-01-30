import React from "react";
import "./Discrepancy.css";
import Button from "@material-ui/core/Button";

const discrepancy = props => {
  const remFuel = props.remainingFuel;
  const specgravity = props.specificGravity;
  const finFuel = props.finalFuelState;
  const delivFuel = props.deliveredFuel;
  const aircraftRecievedFuel = finFuel - remFuel;
  const delivKg = delivFuel * specgravity;

  const roundedNum = props.roundedNum;

  const diffBetweenFuels = () => {
    if (aircraftRecievedFuel >= delivKg) {
      let ans = aircraftRecievedFuel - delivKg;
      return roundedNum(ans);
    } else if (delivKg > aircraftRecievedFuel) {
      let ans = delivKg - aircraftRecievedFuel;
      return roundedNum(ans);
    } else {
      return null;
    }
  };

  const calculateDiff = () => {
    let a = aircraftRecievedFuel;
    let b = delivKg;
    let c = a - b;
    let d = a + b;
    const calc = 100 * (c / (d / 2));
    props.setDiscrepancy(roundedNum(calc));
    if (remFuel === "" || finFuel === "" || delivFuel === "") {
      return <div className="disc-calc">Discrepancy is calculating...</div>;
    } else if (calc >= 4 || calc <= -4) {
      return (
        <div className="not-acc">
          Discrepancy is <strong>{props.discrepancy}%</strong>
        </div>
      );
    } else if (calc < 4 || calc > -4) {
      return (
        <div className="acc">
          Discrepancy is <strong>{props.discrepancy}%</strong>
        </div>
      );
    } else {
      return <div className="disc-calc">Error Calculating Discrepancy</div>;
    }
  };

  const storedAircraftButtonHandler = props.storedAircraftButtonHandler;

  return (
    <div>
      <h2>Check Details</h2>
      <div className="disc">
        <span className="input-box">
          A/C Tail Number <strong>{props.tailNumber}</strong> <br />
        </span>
        <span className="input-box">
          Fuel Put In <strong>{roundedNum(delivKg)}Kg</strong> <br />
        </span>
        <span className="input-box">
          Aircraft Recieved Fuel{" "}
          <strong>{roundedNum(aircraftRecievedFuel)}Kg</strong> <br />
        </span>
        <span className="input-box">
          Difference Between Fuel Put In and Recieved{" "}
          <strong>{diffBetweenFuels()}Kg</strong> <br />
        </span>
        {calculateDiff()}
      </div>
      <div className="button-cont">
        {storedAircraftButtonHandler()}
        <Button
          variant="contained"
          color="primary"
          onClick={props.saveDetailsHandler}
        >
          Save Details
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={props.onClickHandler}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default discrepancy;
