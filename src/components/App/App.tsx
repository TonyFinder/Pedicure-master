import React from 'react';
import styles from './App.module.scss'
import {Header} from '../Header/Header';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Footer} from '../Footer/Footer';
import {Main} from '../Main/Main';
import {Price} from '../Price/Price';
import {Route, Routes} from 'react-router-dom';
import {GoodsForSale} from '../GoodsForSale/GoodsForSale';
import {Training} from '../Training/Training';
import {UnderDevelopment} from '../common/UnderDevelopment/UnderDevelopment';

const theme = createTheme({
    palette: {
        primary: {
            main: '#053543',
        },
    },
});

export const App = () => {

    return <ThemeProvider theme={theme}>
        <Header/>
        <div className={styles.appContainer}>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/training" element={<Training/>}/>
                <Route path="/online" element={<UnderDevelopment/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/goods" element={<GoodsForSale/>}/>
            </Routes>
        </div>
        <Footer/>
    </ThemeProvider>
}