import {Introduction} from './Introduction/Introduction';
import {AboutMe} from './AboutMe/AboutMe';
import React from 'react';
import {Gallery} from './Gallery/Gallery';
import {Helmet} from 'react-helmet-async';

export const Main = () => {
    // console.log("Main")

    return <>
        <Helmet>
            <title>Pedicure</title>
            <meta
                name="description"
                content="Педикюр онлайн курс, обучение, педикюр, педикюр лето, лучший педикюр, идеи педикюра, обучение педикюр, онлайн обучение педикюр, педикюр 2022, pedicure, pedicure courses"/>
            <link rel="canonical" href="/"/>
        </Helmet>

        <Introduction/>
        <AboutMe/>
        <Gallery/>
    </>
}
