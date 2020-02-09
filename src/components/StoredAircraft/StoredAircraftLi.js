import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';

const StoredAircraftLi = props => {
  const [classEnabled, setClassEnabled] = useState(false);

  const storedInfo = props.storedAircraft.map(d => (
    <div key={d.tailNumber}>
      <p>
        Tail Number: <strong>{d.tailNumber}</strong>
        <br />
        Fuel Remaining (A/C Gauges): <strong>{d.initalFuel}Kg</strong> <br />
        Specific Gravity: <strong>{d.specificGravity}</strong>
        <br />
        Fuel Put In (Kg): <strong>{d.deliveredFuelKg}Kg</strong>
        <br />
        Total A/C: <strong>{d.totalACFuelState}Kg</strong>
        <br />
        Kg Discrepancy: <strong>{d.discrepancy}%</strong>
        <br />
      </p>
    </div>
  ));

  return (
      <Paper
        className="input-box"
        onClick={() => setClassEnabled(!classEnabled)}
        style={classEnabled ? { textDecoration: "line-through" } : {}}
      >
        {storedInfo}
      </Paper>
  );
};

export default StoredAircraftLi;
