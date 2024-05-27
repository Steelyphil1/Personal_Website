import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Toolbar } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import WebStoriesIcon from '@mui/icons-material/WebStories';

function SideNavigation({ store }){

    //Constants
    const SIDEBAR_OPTIONS = [
        { key: 'home', label: 'Home', icon: <HomeIcon/>, link: '/'},
        { key: 'codingProjects', label: 'Coding', icon: <CodeIcon/>, link: '/coding' },
        { key: 'workExperience', label: 'Work', icon: <WorkIcon />, link: '/work' },
        { key: 'education', label: 'Education', icon: <SchoolIcon/>, link: '/education' },
        { key: 'climbingLog', label: 'Climbing', icon: <WebStoriesIcon/>, link: '/climbing' },
        //{ key: 'contact', label: 'Contact', icon: <GroupIcon />, link: '/contact' }
    ];
    const DRAWER_WIDTH = '22vw';
    const DRAWER_MIN_WIDTH = '250px';
    const DRAWER_MAX_WIDTH = '300px';
    const theme = useTheme();
    
    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                sx={{
                    minWidth: DRAWER_MIN_WIDTH,
                    maxWidth: DRAWER_MAX_WIDTH,
                    width: DRAWER_WIDTH,
                    [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, minWidth: DRAWER_MIN_WIDTH, maxWidth: DRAWER_MAX_WIDTH, boxSizing: 'border-box' }
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', height: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                    <List>
                        {SIDEBAR_OPTIONS.map((option) => (
                            <ListItem sx={{ '&:hover': { color: theme.palette.primary.main }, color: theme.palette.primary.text }} key={option.key} disablePadding component={Link} to={option.link}>
                                <ListItemButton>
                                    <ListItemIcon>{option.icon}</ListItemIcon>
                                    <ListItemText primary={option.label} sx={{ wordWrap: 'break-word' }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3} alignItems="center" >
                        <Stack direction="horizontal" gap={1} justifyContent="center" alignItems="center">
                            <IconButton href="https://github.com/Steelyphil1?tab=repositories" target="_blank">
                                <GitHubIcon fontSize="large"/>
                            </IconButton>
                            <IconButton href="https://twitter.com/phillipbay?lang=en" target="_blank">
                                <TwitterIcon fontSize="large"/>
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/phillip-bay-44b10579/" target="_blank">
                                <LinkedInIcon fontSize="large"/>
                            </IconButton>
                        </Stack>  
                    </Paper>
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

export default SideNavigation;