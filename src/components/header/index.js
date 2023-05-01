import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Paper, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeSwitch from '../theme-switch';
import dark_logo from '../../static/images/phillip-bay_dark.png';
import light_logo from '../../static/images/phillip-bay_light.png';

function Header({ store, setTheme }){
    //Constants
    const navigate = useNavigate();
    const theme = useTheme();

    //States


    //Effects
    useEffect(()=>{
        console.log('currentTheme: ' , theme);
    },[theme]);

    //Functions
    const toHome = () => {
        navigate(`/`, { replace: true});
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
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;