import React from 'react';
import './InputForm.css';

const inputForm = (props) => {

    const refuseEmptyStoredAircraftHandler = () => {
        if (props.storedAircraft !== '') {
            return props.setShowStoredAircraft();
        } else {
            return alert('No Stored Aircraft');
        }
    };

    const preventNaNHandler = () => {
        if (isNaN(props.remainingFuel) || isNaN(props.deliveredFuel) || isNaN(props.finalFuelState)) {
            return alert('Invalid Input'); 
        } else {
            return props.onClickHandler();
        }
    };

    return (
        <div>
            <form>
                <div className='input-box'>
                    <label htmlFor='tail-number'>A/C Tail Number<br /></label>
                    <input
                        name='tail-number'
                        type='text'
                        value={props.tailNumber}
                        onChange={e => props.setTailNumber(e.target.value)}
                    />
                </div>
                <div className={isNaN(props.remainingFuel) ? 'input-box rejected' : 'input-box'}>
                    <label htmlFor='remaining-fuel'>Fuel Remaining (A/C Gauges)<br /></label>
                    <input
                        name='remaining-fuel'
                        type='text'
                        value={props.remainingFuel}
                        onChange={e => props.setRemainingFuel(e.target.value)}
                    />Kg
                </div>
                <div className='input-box slidecontainer'>
                    <label htmlFor='specific-gravity'>Specific Gravity<br /></label>
                    <input
                        name='specific-gravity'
                        type='range'
                        min='0.7'
                        max='0.88'
                        defaultValue={props.specificGravity}
                        onChange={props.handleSliderChange}
                        className='slider'
                        step='0.01'
                        id='myRange' /> 
                    <label id='spec-gravity-output'>{props.specificGravity}</label>               
                </div>
                <div className='input-box'>
                    <label htmlFor='final-fuelstate'>Total A/C<br /></label>
                    <input
                        name='final-fuelstate'
                        type='text'
                        value={props.finalFuelState}
                        onChange={e => props.setFinalFuelState(e.target.value)} />Kg
                </div>
                <div className='input-box'>
                    <label htmlFor='delivered-fuel'>Fuel Put In (Source Gauges)<br /></label>
                    <input
                        name='delivered-fuel'
                        type='text'
                        value={props.deliveredFuel}
                        onChange={e => props.setDeliveredFuel(e.target.value)} />Lts
                </div>
            </form>
            <button onClick={refuseEmptyStoredAircraftHandler}>Stored Details</button>
            <button onClick={preventNaNHandler}>Submit</button>
        </div>
    )    
};

export default inputForm;