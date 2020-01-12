import React from 'react';

const inputForm = (props) => {
    return (
        <div>
            <form>
                <div className='input-box'>
                    <label htmlFor='remaining-fuel'>Aircraft Remaining Fuel<br /></label>
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
                        max='0.888'
                        defaultValue={props.specificGravity}
                        onChange={props.handleSliderChange}
                        className='slider'
                        step='0.001'
                        id='myRange' /> {props.specificGravity}
                    {/* //? Refactor for slider, confirm with client prefers slider to text 
                <input   
                    type='text'
                    value={specificGravity}
                    onChange={e => setSpecificGravity(e.target.value)} /> */}
                </div>
                <div className='input-box'>
                    <label htmlFor='final-fuelstate'>Aircraft Final Fuel State<br /></label>
                    <input
                        name='final-fuelstate'
                        type='text'
                        value={props.finalFuelState}
                        onChange={e => props.setFinalFuelState(e.target.value)} />Kg
                </div>
                <div className='input-box'>
                    <label htmlFor='delivered-fuel'>Delivered Fuel<br /></label>
                    <input
                        name='delivered-fuel'
                        type='text'
                        value={props.deliveredFuel}
                        onChange={e => props.setDeliveredFuel(e.target.value)} />Lts
                </div>
            </form>
        </div>
    )    
};

export default inputForm;