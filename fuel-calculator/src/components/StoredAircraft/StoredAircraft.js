import React from 'react';

const storedAircraft = (props) => {
    
    return (
        <div>
            {props.storedAircraft}
            <button onClick={props.setShowStoredAircraft}>Back</button>
        </div>
    )
};

export default storedAircraft;