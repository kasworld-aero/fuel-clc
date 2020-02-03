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

  return (
    <div>
      <div className="input-cont">
        <div className="content-wrapper">
          <h1>Stored Aircraft Details</h1>
          {storedAircraft.map((storedAircraft, index) => (
            <StoredAircraftLi
              key={index}
              className="input-box"
              storedAircraft={storedAircraft}
            />
          ))}
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
