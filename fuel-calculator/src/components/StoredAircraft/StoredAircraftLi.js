import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';

const StoredAircraftLi = props => {
  const [classEnabled, setClassEnabled] = useState(false);

  return (
    <li
        onClick={() => setClassEnabled(!classEnabled)}
        style={classEnabled ? { textDecoration: "line-through" } : {}}
      >
      <Paper className='input-box'>
        {props.storedAircraft}
      </Paper>
    </li>
  );
};

export default StoredAircraftLi;
