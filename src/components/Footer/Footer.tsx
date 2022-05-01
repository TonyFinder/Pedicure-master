import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Footer.module.scss'
import {icons} from '../../data/images';

export const Footer = () => {

    return <Box sx={{flexGrow: 1}} className={styles.box}>
        <AppBar position={'static'}>
            <Toolbar className={styles.toolbar}>
                <div className={styles.icons}>
                    {icons.map((icon, index) => (
                        <div className={styles.icon} key={index}>
                            <img src={icon} alt={'icon'}/>
                        </div>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    </Box>
}