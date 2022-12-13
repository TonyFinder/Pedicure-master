import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from './Header.module.scss'
import {MenuList} from '../MatetialUI/MenuList/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

export const Header = () => {
    // console.log("Header")

    return <Box sx={{flexGrow: 1}} className={styles.box}>
        <AppBar className={styles.appBar}>
            <Toolbar className={styles.toolbar}>

                {/*Menu*/}
                {/*<MenuList/>*/}

                {/*<a href={'https://pedicure-cabinet.online/register'}>
                    <Button color={'inherit'} size={'large'} style={{padding: 2}}>
                        КУПИТЬ КУРС
                    </Button>
                </a>*/}

                <Link to="/">
                    <Button color={'inherit'} size={'large'} style={{padding: 2}}>Онлайн-курсы</Button>
                </Link>
                <Link to="/sliders">
                    <Button color={'inherit'} size={'large'} style={{padding: 2}}>Слайдеры</Button>
                </Link>


            </Toolbar>
        </AppBar>
    </Box>
}