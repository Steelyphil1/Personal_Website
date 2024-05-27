import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Box, Toolbar } from '@mui/material';
import store from './services/appState';
import { getDeviceTypeInfo } from './helpers/utilities';
//Component Imports
import Header from './components/header';
import Footer from './components/footer';
//Page Imports
import Home from './pages/home';
import Coding from './pages/coding';
import Work from './pages/work';
import Education from './pages/education';
import Climbing from './pages/climbing';
import Contact from './pages/contact';
//File Imports
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
          h3: {
            fontSize: '3.5rem',
            '@media (min-width:768px)': {
              fontSize: '3.5rem'
            },
            '@media (min-width:992px)': {
              fontSize: '5.0rem'
            },
            color: '#ffffff'
          },
          p: {
            color: '#ffffff',
            fontSize: '1.5rem'
          },
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

  // useEffect(()=> {
  //   console.log('deviceInfo: ' , deviceInfo);
  // },[deviceInfo]);

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
            h3: {
                fontSize: '3.5rem',
              '@media (min-width:768px)': {
                fontSize: '3.5rem'
              },
              '@media (min-width:992px)': {
                fontSize: '5.0rem'
              },
              color: value === 'dark' ? '#ffffff' : '#000000'
            },
            p: {
              color: value === 'dark' ? '#ffffff' : '#000000',
              fontSize: '1.5rem'
            },
            button: {
                textTransform: 'none'
            }
        }
      })
    );
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
                <Route path="/" element={<Home store={store}/>}/>
                <Route path="/coding" element={<Coding store={store}/>}/>
                <Route path="/work" element={<Work store={store}/>}/>
                <Route path="/education" element={<Education store={store}/>}/>
                <Route path="/climbing" element={<Climbing store={store}/>}/>
                <Route path="/contact" element={<Contact store={store}/>}/>
              </Routes>
          </MainBox>
          {(deviceInfo.deviceType === 'Mobile' || deviceInfo.deviceType === 'Tablet') &&
            <Footer store={store}/>
          } 
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;