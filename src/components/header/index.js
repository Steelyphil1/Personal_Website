import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from '../theme-switch';
import MenuIcon from '@mui/icons-material/Menu';
import dark_logo from '../../static/images/Phillip_Dark.png';
import light_logo from '../../static/images/Phillip_Light.png';

function Header({ store, setTheme }){

    //States
    const [deviceInfo, ] = store.useState('deviceInfo');
    const [menuAnchor, setMenuAnchor] = React.useState(null);

    //Constants
    const navigate = useNavigate();
    const theme = useTheme();
    const open = Boolean(menuAnchor);

    //Effects


    //Functions
    const toHome = () => {
        navigate(`/`, { replace: true});
    }

    const menuClick = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleClose = (page) => {
        setMenuAnchor(null);
        navigate(`/${page}`, { replace: true});
    }

    return(
        <React.Fragment>
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Button onClick={toHome}>
                        {theme.palette.mode === 'dark' && <img src={dark_logo} alt="PhillipBay" className="header-image"/>}
                        {theme.palette.mode === 'light' && <img src={light_logo} alt="PhillipBay" className="header-image"/>}
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <ThemeSwitch store={store} setTheme={setTheme}/>
                    {(deviceInfo.deviceType === 'Mobile' || deviceInfo.deviceType === 'Tablet' ) &&
                        <React.Fragment>
                            <IconButton id="header-menu" onClick={menuClick}>
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                            id="header-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={menuAnchor}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                            }}
                            >
                                <MenuItem onClick={() => {handleClose('')}}>Home</MenuItem>
                                <MenuItem onClick={() => {handleClose('coding')}}>Coding</MenuItem>
                                <MenuItem onClick={() => {handleClose('work')}}>Work</MenuItem>
                                <MenuItem onClick={() => {handleClose('education')}}>Education</MenuItem>
                                <MenuItem onClick={() => {handleClose('climbing')}}>Climbing</MenuItem>
                                {/* <MenuItem onClick={() => {handleClose('contact')}}>Contact</MenuItem> */}
                            </Menu>
                        </React.Fragment>
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;