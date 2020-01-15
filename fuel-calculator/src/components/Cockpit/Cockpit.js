import React from 'react';
import InputForm from '../InputForm/InputForm';
import Discrepancy from '../Discrepancy/Discrepancy';

const cockpit = (props) => {
    
    const onSubmitHandler = () => {
        if (props.submitted === false) {
            return (
                <InputForm
                    tailNumber={props.tailNumber}
                    setTailNumber={props.setTailNumber}
                    remainingFuel={props.remainingFuel}
                    setRemainingFuel={props.setRemainingFuel}
                    specificGravity={props.specificGravity}
                    handleSliderChange={props.handleSliderChange}
                    finalFuelState={props.finalFuelState}
                    setFinalFuelState={props.setFinalFuelState}
                    deliveredFuel={props.deliveredFuel}
                    setDeliveredFuel={props.setDeliveredFuel}
                    submitted={props.submitted}
                    setSubmitted={props.setSubmitted} />
            )
        } else if (props.submitted) {
            return (
                <Discrepancy
                    tailNumber={props.tailNumber}
                    remainingFuel={props.remainingFuel}
                    specificGravity={props.specificGravity}
                    finalFuelState={props.finalFuelState}
                    deliveredFuel={props.deliveredFuel}
                    setSubmitted={props.setSubmitted} />
            )
        }
    }
    return onSubmitHandler();
}

export default cockpit;