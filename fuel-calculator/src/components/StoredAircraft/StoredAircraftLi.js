import React, { useState } from "react";

const StoredAircraftLi = props => {
  const [storedAircraft] = useState(props.storedAircraft);
  const [classEnabled, setClassEnabled] = useState(false);

  return (
    <li
      onClick={() => setClassEnabled(!classEnabled)}
      className="input-box"
      style={classEnabled ? { textDecoration: "line-through" } : {}}
    >
      {storedAircraft}
    </li>
  );
};

export default StoredAircraftLi;
