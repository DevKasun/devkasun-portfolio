import React, { useState } from 'react';
import classes from './FlexSlider.module.scss';
import SliderItem from './SliderItem';

const FlexSlider = () => {

    return (
        <ul className={classes.flexSlider}>
            <SliderItem />
        </ul>
    )
}

export default FlexSlider;