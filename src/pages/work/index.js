import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SideNavigation from '../../components/side-navigation';

function Work({ store }){
    const [deviceInfo, setDeviceInfo] = store.useState('deviceInfo');
    return(
        <React.Fragment>
            <Box display="flex">
                {(deviceInfo.deviceType === "Laptop" || deviceInfo.deviceType === "LargerThanLaptop") &&
                    <SideNavigation store={store}></SideNavigation>
                }
                <Typography>Work</Typography>
            </Box>
        </React.Fragment>
    );
}

export default Work;