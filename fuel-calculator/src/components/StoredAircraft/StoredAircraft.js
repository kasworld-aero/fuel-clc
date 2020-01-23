import React from 'react';
import StoredAircraftLi from './StoredAircraftLi'

const StoredAircraftCont = (props) => {
    const storedAircraft = props.storedAircraft

    return (
        <div>
            <h2>Stored Aircraft</h2>
            <ul>
                {storedAircraft.map((storedAircraft, index) =>
                    <StoredAircraftLi
                        key={index}
                        className='input-box'
                        storedAircraft={storedAircraft} />
                )}
            </ul>
            <button onClick={props.setShowStoredAircraft}>Back</button>
        </div>
    )
};

export default StoredAircraftCont