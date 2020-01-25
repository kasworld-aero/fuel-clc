import React, { useState } from "react";

const StoredAircraftLi = props => {
  const [classEnabled, setClassEnabled] = useState(false);

  return (
    <li
      onClick={() => setClassEnabled(!classEnabled)}
      className="input-box"
      style={classEnabled ? { textDecoration: "line-through" } : {}}
    >
      {props.storedAircraft}
    </li>
  );
};

export default StoredAircraftLi;
