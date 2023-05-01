import { FormGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Switch } from '@mui/material';

function ThemeSwitch({ store, setTheme }){

    const currentTheme = useTheme();
    //const theme = localStorage.getItem('theme');

    useEffect(()=> {
        console.log('currentTheme in ThemeSwitch: ' , currentTheme);
    }, []);

    const getOtherTheme = () => {
        return currentTheme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    const handleThemeChange = () => {
        if(currentTheme.palette.mode === 'dark'){
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return(
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked/>} label={getOtherTheme()} onClick={handleThemeChange} />
        </FormGroup>
    );
}

export default ThemeSwitch;