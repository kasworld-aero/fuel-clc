import React, { useState } from 'react'

const StoredAircraftLi = (props) => {

    const [storedAircraft] = useState(props.storedAircraft)
    const [classEnabled, setClassEnabled] = useState(false)

    return (
        <li onClick={() => setClassEnabled(!classEnabled)} className='input-box' style={classEnabled ? { color: 'red' } : {}} >
            {storedAircraft}
        </li>
    )
}

export default StoredAircraftLi;