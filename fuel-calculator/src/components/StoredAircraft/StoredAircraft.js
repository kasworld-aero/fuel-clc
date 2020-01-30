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
      <h2>Stored Aircraft Details</h2>
      <ul>
        {storedAircraft.map((storedAircraft, index) => (
          <StoredAircraftLi
            key={index}
            className="input-box"
            storedAircraft={storedAircraft}
          />
        ))}
      </ul>
      <div className="button-cont">
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
  );
};

export default StoredAircraftCont;
