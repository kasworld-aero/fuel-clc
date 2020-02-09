import React from "react";
import StoredAircraftLi from "./StoredAircraftLi";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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

  return (
    <div>
      <div className="input-cont">
        <div className="content-wrapper">
          <h1>Stored Aircraft Details</h1>
          <StoredAircraftLi
            key={storedAircraft.tailNumber}
            storedAircraft={storedAircraft}
          />
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
