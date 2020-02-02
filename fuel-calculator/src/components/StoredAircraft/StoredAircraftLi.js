import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';

const StoredAircraftLi = props => {
  const [classEnabled, setClassEnabled] = useState(false);

  return (
      <Paper
        className="input-box"
        onClick={() => setClassEnabled(!classEnabled)}
        style={classEnabled ? { textDecoration: "line-through" } : {}}
      >
        {props.storedAircraft}
      </Paper>
  );
};

export default StoredAircraftLi;
