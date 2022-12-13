import React from 'react';
import styles from './App.module.scss'
import {Header} from '../Header/Header';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Footer} from '../Footer/Footer';
import {Price} from '../Price/Price';
import {Route, Routes} from 'react-router-dom';
import {Training} from '../Training/Training';
import {Helmet} from 'react-helmet-async';
import {ModalUp} from '../common/ModalUp/ModalUp';
import {Online} from '../Online/Online';
import { Sliders } from '../Sliders/Sliders';

const theme = createTheme({
    palette: {
        primary: {
            main: '#053543',
        },
    },
});

export const App = () => {
    // console.log("App")

    return <ThemeProvider theme={theme}>
        <Helmet>
            <title>Pedicure</title>
            <meta
                name="description"
                content="Педикюр онлайн курс, обучение, педикюр, педикюр лето, лучший педикюр, идеи педикюра, обучение педикюр, онлайн обучение педикюр, педикюр 2022, pedicure, pedicure courses"/>
            <link rel="canonical" href="/"/>
        </Helmet>

        <Header/>
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<Online/>}/>
                {/*<Route path="/training" element={<Training/>}/>*/}
                {/*<Route path="/price" element={<Price/>}/>*/}
                <Route path="/sliders" element={<Sliders/>}/>
                {/*<Route path="/goods" element={<GoodsForSale/>}/>*/}
            </Routes>
        </div>
        <Footer/>
        <ModalUp speed={20}/>
    </ThemeProvider>
}