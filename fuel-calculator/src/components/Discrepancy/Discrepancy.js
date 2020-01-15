import React from 'react';
import './Discrepancy.css'

const discrepancy = (props) => {
    const remFuel = props.remainingFuel;
    const specgravity = props.specificGravity;
    const finFuel = props.finalFuelState;
    const delivFuel = props.deliveredFuel;
    const aircraftRecievedFuel = finFuel - remFuel;
    const delivKg = delivFuel * specgravity;    

    const onClickHandler = () => {
        return props.setSubmitted(false);
    }
    
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
                    Discrepancy is <strong>{roundedNum(calc)}%</strong>
                </div>
            ) 
        } else if (calc < 4) {
            return (
               <div className='acc'>
                    Discrepancy is <strong>{roundedNum(calc)}%</strong>
                </div> 
            )
        } else {
            return (
            <div className='disc-calc'>
                Error Calculating Discrepancy
            </div>
            )
        }
    };

    return (
        <div className='disc'>
            <span className='results'>
                A/C Tail Number <strong>{props.tailNumber}</strong> <br />
            </span>
            <span className='results'>
                Fuel Put In <strong>{roundedNum(delivKg)}Kg</strong> <br /> 
            </span>
            <span className='results'>
                Aircraft Recieved Fuel <strong>{roundedNum(aircraftRecievedFuel)}Kg</strong> <br />
            </span>
            <span className='results'>
                Difference Between Fuel Put In and Recieved <strong>{diffBetweenFuels()}Kg</strong> <br />
            </span>
                {calculateDiff()}
            <button onClick={onClickHandler} >Back</button>
        </div>
    )
};

export default discrepancy;