import React from "react";
import StoredAircraftLi from "./StoredAircraftLi";
import Button from "@material-ui/core/Button";
import './StoredAircraft.css';

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
      {/* <div className="input-cont"> */}
      <div>
        <h1>Stored Aircraft Details</h1>
        <ul>
          {storedAircraft.map((storedAircraft, index) => (
            <StoredAircraftLi
              key={index}
              className="input-box"
              storedAircraft={storedAircraft}
            />
          ))}
        </ul>
      </div>
        <div className="button-cont">
          <div className="button-wrapper">
            <Button
              variant="contained"
              color="secondary"
              onClick={confirmResetWindow}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={props.setShowStoredAircraft}
            >
              Back
            </Button>
          </div>
        </div>
    </div>
  );
};

export default StoredAircraftCont;
