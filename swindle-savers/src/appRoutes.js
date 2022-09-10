import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppBar } from '@mui/material';
import DrawerAppBar from './Components/DrawerAppBar/DrawerAppBar';
import ClippedDrawer from './Components/ClippedDrawer/ClippedDrawer';

const appRoutes = [
  {
    path: '/dashboard',
    element: (
        <ClippedDrawer></ClippedDrawer>
    ),
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  }
  
];

export default appRoutes;
