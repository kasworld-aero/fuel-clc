import React from "react";
import StoredAircraftLi from "./StoredAircraftLi";
import Button from "@material-ui/core/Button";

const StoredAircraftCont = props => {
  const storedAircraft = props.storedAircraft;

  const confirmResetWindow = () => {
    if (
      window.confirm(
        "This will clear all stored Aircraft. Do you want to continue"
      )
    ) {
      return props.resetApp();
    }
  };

  const storedInfo = storedAircraft.map(d => (
    <StoredAircraftLi
      key={d.tailNumber}
      tailNumber={d.tailNumber}
      fuelRem={d.initalFuel}
      SG={d.specificGravity}
      fuelIn={d.deliveredFuelKg}
      totalAC={d.totalACFuelState}
      disc={d.discrepancy}
    />
  ));

  return (
    <div>
      <div className="input-cont">
        <div className="content-wrapper">
          <h1>Stored Aircraft Details</h1>
          {storedInfo}
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
