import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SideNavigation from '../../components/side-navigation';
import config from '../../config';
import homephoto from '../../static/images/homephoto.png';

function Home({ store }){
    const [deviceInfo, setDeviceInfo] = store.useState('deviceInfo');
    return(
        <React.Fragment>
            <Box display="flex">
                {(deviceInfo.deviceType === "Laptop" || deviceInfo.deviceType === "LargerThanLaptop") &&
                    <SideNavigation store={store}></SideNavigation>
                }
                <Grid container spacing={5} sx={{ mt: 10, ml: 10, mr: 10, mb: 10}}>
                    <Grid item xs={12} textAlign="center">
                        <Typography variant="h3">{config.verbiage.home.title}</Typography>
                    </Grid>
                    <Grid item direction="column" textAlign="center" lg={6} md={6} xs={12}>
                        <img src={homephoto} className="homephoto"></img>
                    </Grid>
                    <Grid item direction="column" textAlign="left" lg={6} md={6} xs={12} sx={{ pb: 20}}>
                        <Typography variant="p">{config.verbiage.home.intro_right}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Home;