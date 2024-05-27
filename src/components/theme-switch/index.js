import { FormGroup } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Switch } from '@mui/material';

function ThemeSwitch({ store, setTheme }){

    const currentTheme = useTheme();
    const [deviceInfo, ] = store.useState('deviceInfo');

    const getThemeName = () => {
        return currentTheme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode';
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
            {(deviceInfo.deviceType === 'Laptop' || deviceInfo.deviceType === 'LargerThanLaptop') &&
                <FormControlLabel control={<Switch defaultChecked/>} label={getThemeName()} onClick={handleThemeChange} />
            }
            {(deviceInfo.deviceType === 'Mobile' || deviceInfo.deviceType === 'Tablet') &&
                <FormControlLabel control={<Switch defaultChecked/>} label={""} onClick={handleThemeChange} />
            } 
        </FormGroup>
    );
}

export default ThemeSwitch;