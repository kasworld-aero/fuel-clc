import React from 'react';

const storedAircraft = (props) => {
    
    return (
        <div>
            {props.showStoredAircraft}
            <button onClick={props.setShowStoredAircraft}>Back</button>
        </div>
    )
};

export default storedAircraft;