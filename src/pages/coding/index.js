import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SideNavigation from '../../components/side-navigation';
import config from '../../config';
import tent from '../../static/images/tent-icon.png'

function Coding({ store }){
    const [deviceInfo, ] = store.useState('deviceInfo');
    return(
        <React.Fragment>
            <Box display="flex">
                {(deviceInfo.deviceType === "Laptop" || deviceInfo.deviceType === "LargerThanLaptop") &&
                    <SideNavigation store={store}></SideNavigation>
                }
                <Stack spacing={6} justifyContent="center" alignItems="center" textAlign="center" sx={{mt: 15, ml: 20, mr: 20}}>
                        <Typography variant="h3">{config.verbiage.coding.title}</Typography>
                        <Typography variant="p" sx={{fontSize: {md: '2.5rem', xs: '2.rem'}}}>{config.verbiage.coding.desc}</Typography>
                        <Box sx={{pt: 10}}>
                            <a href="https://github.com/Steelyphil1/scraper" target="_blank" rel="noreferrer">
                                <img src={tent} className="tentphoto" alt=""></img>
                            </a>
                        </Box>
                </Stack>
                
            </Box>
        </React.Fragment>
    );
}

export default Coding;