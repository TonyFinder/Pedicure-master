import React from 'react';
import {IntroOnline} from './IntroOnline/IntroOnline';
import {Introduction} from '../Main/Introduction/Introduction';
import {AboutMe} from '../Main/AboutMe/AboutMe';
import {YouWillKnow} from './YouWillKnow/YouWillKnow';
import {Gallery} from '../Main/Gallery/Gallery';
import {Program} from './Program/Program';
import {Additions} from './Additions/Additions';
import {Buy} from './Buy/Buy';

export const Online = () => {
    return <>
        <IntroOnline/>
        <Introduction/>
        <AboutMe/>
        <YouWillKnow/>
        <Gallery/>
        <Program/>
        {/*<Additions/>*/}
        <Buy/>
        {/*<DiscountCounter/>*/}
    </>
}