import React from 'react';
import './Discrepancy.css'

const discrepancy = (props) => {
    const remFuel = props.remainingFuel;
    const specgravity = props.specificGravity;
    const finFuel = props.finalFuelState;
    const delivFuel = props.deliveredFuel;
    const aircraftRecievedFuel = finFuel - remFuel;
    const delivKg = delivFuel * specgravity;    
    
    const roundedNum = (num) => {
            return num.toFixed(2);
    }

    const diffBetweenFuels = () => {
        if (aircraftRecievedFuel >= delivKg) {
            let ans = aircraftRecievedFuel - delivKg;
            return roundedNum(ans);
        } else if (delivKg > aircraftRecievedFuel) {
            let ans = delivKg - aircraftRecievedFuel;
            return roundedNum(ans);
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
        if (remFuel === '' || finFuel === '' || delivFuel === '') {
            return (
                <div className='disc-calc'>
                    Discrepancy is calculating...
                </div>
            )
        } else if (calc >= 4 || calc <= -4) {
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
        } 
    };

    return (
        <div className='disc'>
            <span className='results'>
                Fuel Put In {roundedNum(delivKg)}Kg <br /> 
            </span>
            <span className='results'>
                Aircraft Recieved Fuel {roundedNum(aircraftRecievedFuel)}Kg <br />
            </span>
            <span className='results'>
                Difference Between Fuel Put In and Recieved {diffBetweenFuels()}Kg <br />
            </span>
                {calculateDiff()}
        </div>
    )
};

export default discrepancy;