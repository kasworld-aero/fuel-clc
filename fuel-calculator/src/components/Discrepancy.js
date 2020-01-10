/**
 * todo confirm the calculation for percentage diff is working
 * todo Get diffBetweenFuels to work
 * todo need to assure that diffBetweenFuels doesn't return a negative number ever. 
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
    const diffBetweenFuels = aircraftRecievedFuel - delivFuel;
    
    const calculateDiff = () => {
        const sumFuelDiff = aircraftRecievedFuel + delivFuel;
        let a = sumFuelDiff;
        let b = delivFuel;
        const calc = 100 * ((a - b) / ((a + b) / 2));
        //percentage difference = 100 * |a - b| / ((a + b) / 2)
        if (calc >= 4) {
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
                Difference Between Delivered and Recieved {diffBetweenFuels}Kg <br />
            </span>
                {calculateDiff()}
        </div>
    )
};

export default discrepancy;