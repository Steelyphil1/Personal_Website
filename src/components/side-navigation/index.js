import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GroupIcon from '@mui/icons-material/Group';
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import WebStoriesIcon from '@mui/icons-material/WebStories';

function SideNavigation({ store }){

    //Constants
    const SIDEBAR_OPTIONS = [
        { key: 'home', label: 'Home', icon: <HomeIcon/>},
        { key: 'codingProjects', label: 'Coding Projects', icon: <CodeIcon/>, link: '/settings/personal-profile' },
        { key: 'workExperience', label: 'Work Experience', icon: <WorkIcon />, link: '/settings/personal-profile' },
        { key: 'education', label: 'Education', icon: <SchoolIcon/>, link: '/settings/personal-profile' },
        { key: 'climbingLog', label: 'Climbing Log', icon: <WebStoriesIcon/>, link: '/settings/billing' },
        { key: 'contact', label: 'Contact', icon: <GroupIcon />, link: '/settings/personal-profile' }
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
                <Box sx={{ overflow: 'auto' }}>
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
                </Box>
            </Drawer>
        </React.Fragment>
    );
}

export default SideNavigation;