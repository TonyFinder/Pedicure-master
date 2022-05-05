import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Header.module.scss'
import {MenuList} from '../MatetialUI/MenuList/MenuList';
import Button from '@mui/material/Button';

export const Header = () => {

    return <Box sx={{flexGrow: 1}} className={styles.box}>
        <AppBar>
            <Toolbar className={styles.toolbar}>
                <MenuList/>
                <a href={'https://wa.me/79510215025'} target={'_blank'}>
                    <Button color={'inherit'} size={'large'} style={{padding: 2}}>
                        ЗАПИСЬ НА ПРОЦЕДУРУ
                    </Button>
                </a>
            </Toolbar>
        </AppBar>
    </Box>
}