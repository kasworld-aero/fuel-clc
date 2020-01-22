import React from 'react';

const storedAircraftCont = (props) => {
    const storedAircraft = props.storedAircraft;
    const storedAircraftLi = storedAircraft.map((storedAircraft, index) => 
      <li key={index} className='input-box'>
          {storedAircraft} 
      </li>
    );

    return (
        <div>
            <h2>Stored Aircraft</h2>
            <ul>{storedAircraftLi}</ul>
            <button onClick={props.resetApp}>Reset App</button>
            <button onClick={props.setShowStoredAircraft}>Back</button>
        </div>
    )
};

export default storedAircraftCont;