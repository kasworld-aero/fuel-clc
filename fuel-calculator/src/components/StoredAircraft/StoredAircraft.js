import React from "react";
import StoredAircraftLi from "./StoredAircraftLi";

const StoredAircraftCont = props => {
  const storedAircraft = props.storedAircraft;

  const confirmResetWindow = () => {
      if(window.confirm('This will clear all stored Aircraft. Do you want to continue')) {
          return props.resetApp()
      };
  };

  return (
    <div>
      <h2>Stored Aircraft</h2>
      <ul>
        {storedAircraft.map((storedAircraft, index) => (
          <StoredAircraftLi
            key={index}
            className="input-box"
            storedAircraft={storedAircraft}
          />
        ))}
      </ul>
      <button onClick={confirmResetWindow}>Reset</button>
      <button onClick={props.setShowStoredAircraft}>Back</button>
    </div>
  );
};

export default StoredAircraftCont;
