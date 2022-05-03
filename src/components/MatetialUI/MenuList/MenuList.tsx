import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Zoom from '@mui/material/Zoom';

export const MenuList = () => {
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
                TransitionComponent={Zoom}
            >
                <MenuItem onClick={handleClose}>Главная</MenuItem>
                <MenuItem onClick={handleClose}>Обучение</MenuItem>
                <MenuItem onClick={handleClose}>Прайс на услуги</MenuItem>
                <MenuItem onClick={handleClose}>Товары в продаже</MenuItem>
            </Menu>
        </div>
    );
};
