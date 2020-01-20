import React from 'react';
import InputForm from '../InputForm/InputForm';
import Discrepancy from '../Discrepancy/Discrepancy';
import StoredAircraftCont from '../StoredAircraft/StoredAircraft';

const cockpit = (props) => {

    const onClickHandler = () => {
        if (props.submitted === false) {
            return props.setSubmitted(true);
        } else if (props.submitted) {
            return props.setSubmitted(false);
        }
    };

    const onSubmitHandler = () => {
        if (props.showStoredAircraft) {
            return (
                <StoredAircraftCont 
                    storedAircraft={props.storedAircraft}
                    setShowStoredAircraft={props.setShowStoredAircraft} />
            )
        } else if (props.submitted === false) {
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
                    setSubmitted={props.setSubmitted}
                    setShowStoredAircraft={props.setShowStoredAircraft}
                    onClickHandler={onClickHandler} />
            )
        } else if (props.submitted) {
            return (
                <Discrepancy
                    tailNumber={props.tailNumber}
                    remainingFuel={props.remainingFuel}
                    specificGravity={props.specificGravity}
                    finalFuelState={props.finalFuelState}
                    deliveredFuel={props.deliveredFuel}
                    setSubmitted={props.setSubmitted}
                    setShowStoredAircraft={props.setShowStoredAircraft}
                    setStoredAircraft={props.setStoredAircraft}
                    storedAircraft={props.storedAircraft}
                    saveDetailsHandler={props.saveDetailsHandler}
                    discrepancy={props.discrepancy}
                    setDiscrepancy={props.setDiscrepancy}
                    roundedNum={props.roundedNum}
                    onClickHandler={onClickHandler}
                    submitted={props.submitted} />
            )
        }
    }
    return onSubmitHandler();
}

export default cockpit;