import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import config from '../../config';
import SideNavigation from '../../components/side-navigation';

function Education({ store }){
    const [deviceInfo, ] = store.useState('deviceInfo');
    return(
        <React.Fragment>
        <Box display="flex">
            {(deviceInfo.deviceType === "Laptop" || deviceInfo.deviceType === "LargerThanLaptop") &&
                <SideNavigation store={store}></SideNavigation>
            }
            <Stack spacing={6} justifyContent="center" alignItems="center" textAlign="center" sx={{mt: 15, ml: 20, mr: 20}}>
                    <Typography variant="h3">{config.verbiage.education.title}</Typography>
                    <Typography variant="p" sx={{fontSize: {md: '2.5rem', xs: '2.rem'}}}>{config.verbiage.education.desc}</Typography>
            </Stack>
        </Box>
    </React.Fragment>
    );
}

export default Education;