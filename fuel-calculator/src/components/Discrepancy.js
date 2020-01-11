/**
 * todo need to cofirm with Chris what calcualation they use then apply
 */
import React from 'react';
import './Discrepancy.css'

const discrepancy = (props) => {
    const remFuel = props.remainingFuel;
    const specgravity = props.specificGravity;
    const finFuel = props.finalFuelState;
    const delivFuel = props.deliveredFuel;
    const aircraftRecievedFuel = finFuel - remFuel;
    const delivKg = delivFuel * specgravity;
    
    const diffBetweenFuels = () => {
        if (aircraftRecievedFuel >= delivFuel) {
            return aircraftRecievedFuel - delivFuel;
        } else if (delivFuel > aircraftRecievedFuel) {
            return delivFuel - aircraftRecievedFuel;
        } else {
            return null
        }
    } 
    
    const calculateDiff = () => {
        let a = aircraftRecievedFuel;
        let b = delivKg;
        let c = a - b
        let d = a + b
        const calc = 100 * (c / (d / 2));
        //percentage difference = 100 * |a - b| / ((a + b) / 2)
        if (calc >= 4 || calc <= -4) {
            return (
                <div className='not-acc'>
                    Discrepancy is {calc}%
                </div>
            ) 
        } else if (calc < 4) {
            return (
               <div className='acc'>
                    Discrepancy is {calc}%
                </div> 
            )
        } else if (remFuel === '' || specgravity === '' || finFuel === '' || delivFuel === '') {
            return (
                <div className='disc-calc'>
                    Discrepancy is calculating...
                </div>
            )
        }
    };

    return (
        <div className='disc'>
            <span className='results'>
                Delivered Fuel {delivKg}Kg <br /> 
            </span>
            <span className='results'>
                Aircraft Recieved Fuel {aircraftRecievedFuel}Kg <br />
            </span>
            <span className='results'>
                Difference Between Delivered and Recieved {diffBetweenFuels()}Kg <br />
            </span>
                {calculateDiff()}
        </div>
    )
};

export default discrepancy;