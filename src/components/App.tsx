import React from 'react';
import {Header} from './Header/Header';
import {Introduction} from './Introduction/Introduction';
import styles from './App.module.scss'
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#053543',
        },
    },
});

export const App = () => {

    return  <ThemeProvider theme={theme}>
    <div className={styles.container}>
        <Header/>
        <Introduction/>
    </div>
    </ThemeProvider>
}