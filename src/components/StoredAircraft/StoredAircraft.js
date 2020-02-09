import React from "react";
import StoredAircraftLi from "./StoredAircraftLi";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';

const StoredAircraftCont = props => {
  const storedAircraft = props.storedAircraft;
  

    // Object.keys(ingredients)
    //   .map(igKey => {
    //     return ingredients[igKey];
    //   })
    //   .reduce((sum, el) => {
    //     return sum + el;
    //   }, 0);
    // this.setState({ purchasable: sum > 0 });
  // }

  /**const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )
  
const myObject = { a: 1, b: 2, c: 3 }

console.log(objectMap(myObject, v => 2 * v))  */

  const confirmResetWindow = () => {
    if (
      window.confirm(
        "This will clear all stored Aircraft. Do you want to continue"
      )
    ) {
      return props.resetApp();
    }
  };

  const storedAircraft1 = storedAircraft.map(d => (
    <div key={d.tailNumber}>
      <p>
        Tail Number: <strong>{d.tailNumber}</strong>
        <br />
        Fuel Remaining (A/C Gauges): <strong>{d.initalFuel}Kg</strong> <br />
        Specific Gravity: <strong>{d.specificGravity}</strong>
        <br />
        Fuel Put In (Kg): <strong>{d.deliveredFuelKg}Kg</strong>
        <br />
        Total A/C: <strong>≈{d.totalACFuelState}</strong>
        <br />
        Kg Discrepancy: <strong>{d.discrepancy}%</strong>
        <br />
      </p>
    </div>
  ));

  console.log(storedAircraft1)

  return (
    <div>
      <div className="input-cont">
        <div className="content-wrapper">
          <h1>Stored Aircraft Details</h1>
          {/* {storedAircraft.map(([key, val], index) => (
            <StoredAircraftLi
              key={index}
              className="input-box"
              storedAircraft={storedAircraft}
            />
          ))} */}
          <Paper>{storedAircraft1} </Paper>
        </div>
        <footer>
          <div className="button-wrapper">
            <Button
              className="buttons"
              variant="contained"
              color="secondary"
              onClick={confirmResetWindow}
            >
              Reset
            </Button>
            <Button
              className="buttons"
              variant="contained"
              color="primary"
              onClick={props.setShowStoredAircraft}
            >
              Back
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StoredAircraftCont;
