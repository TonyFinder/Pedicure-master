import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Header.module.scss'
import {MenuList} from '../../material_UI/MenuList/MenuList';

export const Header = () => {

    return <Box sx={{flexGrow: 1}} className={styles.box}>
        <AppBar>
            <Toolbar className={styles.toolbar}>
                <MenuList/>
            </Toolbar>
        </AppBar>
    </Box>
}