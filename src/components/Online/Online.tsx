import React from 'react';
import {Discount} from './Discount/Discount';
import {IntroOnline} from './IntroOnline/IntroOnline';
import {Introduction} from '../Main/Introduction/Introduction';
import {AboutMe} from '../Main/AboutMe/AboutMe';
import {YouWillKnow} from './YouWillKnow/YouWillKnow';

export const Online = () => {
    return <>
        <IntroOnline/>
        <Introduction/>
        <AboutMe/>
        <YouWillKnow/>
        <Discount/>
    </>
}