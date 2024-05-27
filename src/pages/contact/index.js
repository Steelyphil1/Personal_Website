import React from 'react';
import { Box, Typography } from '@mui/material';
import SideNavigation from '../../components/side-navigation';

function Contact({ store }){
    const [deviceInfo, ] = store.useState('deviceInfo');
    return(
        <React.Fragment>
            <Box display="flex">
                {(deviceInfo.deviceType === "Laptop" || deviceInfo.deviceType === "LargerThanLaptop") &&
                    <SideNavigation store={store}></SideNavigation>
                }
                <Typography>Contact</Typography>
            </Box>
        </React.Fragment>
    );
}

export default Contact;