import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Box, Toolbar } from '@mui/material';
import store from './services/appState';
import Header from './components/header';
import SideNavigation from './components/side-navigation';
import Footer from './components/footer';
import Home from './pages/home';
//import Responsive from './components/responsive';
import { getDeviceTypeInfo } from './helpers/utilities';
import './App.css';

function App() {
  //Constants
  const MainBox = styled(Box)(({ theme }) => ({
    bgcolor: 'text.disabled',
    height: '100%',
    minHeight: '100vh',
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: theme.palette.mode === 'dark' ? '#141414' : '#dcdcde',
    [theme.breakpoints.up('md')]: {}
  }));

  //States
  const [mainTheme, setMainTheme] = useState(
    createTheme({
      spacing: 2,
      palette: {
          mode: 'dark',
          primary: {
              main: '#5d7bf0',
              text: '#ffffff'
          }
      },
      typography: {
          fontFamily: [
            'Helvetica'
          ],
          button: {
              textTransform: 'none'
          }
      }
    })
  );
  const [deviceInfo, setDeviceInfo] = store.useState('deviceInfo');

  //Effects
  useEffect(() => {
    document.title = 'Phillip Bay';
  }, []);

  useEffect(()=> {
    window.addEventListener('resize', handleResize, false);
  },[]);

  //Functions
  const setTheme = (value) => {
    setMainTheme(
      createTheme({
        spacing: 2,
        palette: {
            mode: value,
            primary: {
                main: value === 'dark' ? '#5d7bf0' : '#ffffff',
                text: value === 'dark' ? '#ffffff' : '#000000'
            }
        },
        typography: {
            button: {
                textTransform: 'none'
            }
        }
      })
    );
    console.log('settingTheme with: ' , value);
    localStorage.setItem('theme', value);
  }

  const handleResize = () => {
    setDeviceInfo(getDeviceTypeInfo());
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Box sx={{ height: '100%', display: 'flex'}}>
          <Header store={store} setTheme={setTheme}/>
          <MainBox>
              <Toolbar/>
              <Routes>
                <Route path="/home" element={<Home store={store}/>}/>
              </Routes>
              {deviceInfo.deviceType === "Laptop" &&
                <SideNavigation store={store}></SideNavigation>
              }
          </MainBox>
          <Footer store={store}/>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
