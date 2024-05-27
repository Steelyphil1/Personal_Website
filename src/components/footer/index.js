import React from 'react';
import { Grid, IconButton, Paper } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer({ store }){
    //Constants

    //States

    //Effects

    //Functions

    return(
        <React.Fragment>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '125px', minHeight: '10vh', maxHeight: '12vh'}} elevation={3} alignItems="center">
                <Grid container justifyContent="center" alignItems="center" sx={{ mt: '3vh'}}>
                    <Grid item xs={1} sx={{ mr: 5}}>
                        <IconButton href="https://github.com/Steelyphil1?tab=repositories" target="_blank">
                            <GitHubIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={1} sx={{ mr: 5}}>
                        <IconButton href="https://twitter.com/phillipbay?lang=en" target="_blank">
                            <TwitterIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={1} sx={{ mr: 5}}>
                        <IconButton href="https://www.linkedin.com/in/phillip-bay-44b10579/" target="_blank">
                            <LinkedInIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
}

export default Footer;