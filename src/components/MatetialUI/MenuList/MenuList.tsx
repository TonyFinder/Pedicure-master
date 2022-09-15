import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import styles from './MenuList.module.scss'
import Fade from '@mui/material/Fade';

export const MenuList = () => {
    // console.log("MenuList")

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color={'inherit'}
                size={'large'}
                style={{padding: 2}}
            >
                Меню
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                className={styles.links}
            >
                <Link to="/">
                    <MenuItem onClick={handleClose} className={styles.menuItem}>Онлайн курс</MenuItem>
                </Link>
                <Link to="/sliders">
                    <MenuItem onClick={handleClose} className={styles.menuItem}>Заказать слайдеры</MenuItem>
                </Link>
                <Link to="/training">
                    <MenuItem onClick={handleClose} className={styles.menuItem}>Обучение</MenuItem>
                </Link>
                <Link to="/price">
                    <MenuItem onClick={handleClose} className={styles.menuItem}>Прайс на услуги</MenuItem>
                </Link>
                {/*<Link to="/goods">
                    <MenuItem onClick={handleClose} className={styles.menuItem}>Средства для ухода</MenuItem>
                </Link>*/}
            </Menu>
        </div>
    );
};
