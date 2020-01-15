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
        if (aircraftRecievedFuel >= delivKg) {
            return aircraftRecievedFuel - delivKg;
        } else if (delivKg > aircraftRecievedFuel) {
            return delivKg - aircraftRecievedFuel;
        } else {
            return null
        }
    } 
    
    const roundedNum = (num) => {
        return num.toFixed(2);
    }

    const preventOverRound = (num) => {
        const roundedNumAns = roundedNum(num);
        if (num)
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
                    Discrepancy is {roundedNum(calc)}%
                </div>
            ) 
        } else if (calc < 4) {
            return (
               <div className='acc'>
                    Discrepancy is {roundedNum(calc)}%
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
                Difference Between Delivered and Recieved {roundedNum(diffBetweenFuels())}Kg <br />
            </span>
                {calculateDiff()}
        </div>
    )
};

export default discrepancy;