import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import AppHeader from './AppHeader'; // Renamed from Header.jsx
import AppSidebar from './AppSidebar'; // Renamed from Sidebar.jsx
import React from 'react';

// Styled main content area
const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  [theme.breakpoints.up('md')]: {
    marginLeft: '240px',
  },
}));

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader onDrawerToggle={handleDrawerToggle} />
      <AppSidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
      <MainContent>
        <Toolbar /> {/* Spacer for app bar */}
        <Outlet /> {/* This renders nested routes */}
      </MainContent>
    </Box>
  );
};

export default Dashboard;