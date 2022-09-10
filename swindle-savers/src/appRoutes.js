import React from 'react';
import ClippedDrawer from './Components/ClippedDrawer/ClippedDrawer';
import SwindlesPage from './Components/SwindlesPage/SwindlesPage';
import AlertsPage from './Components/AlertsPage/AlertsPage';
import AboutPage from './Components/AboutPage/AboutPage';
import { Navigate } from 'react-router-dom';
import ReportPage from './Components/ReportPage/ReportPage';

const appRoutes = [
  {
    path: '/dashboard',
    element: (
        <ClippedDrawer>
        </ClippedDrawer>
    ),
  },
  {
    path: '/swindles',
    element: (
        <ClippedDrawer>
            <SwindlesPage></SwindlesPage>
        </ClippedDrawer>
    ),
  },
  {
    path: '/alerts',
    element: (
        <ClippedDrawer>
            <AlertsPage></AlertsPage>
        </ClippedDrawer>
    ),
  },
    {
    path: '/about',
    element: (
        <ClippedDrawer>
            <AboutPage></AboutPage>
        </ClippedDrawer>
    ),
  },  
  {
    path: '/report',
    element: (
        <ClippedDrawer>
            <ReportPage></ReportPage>
        </ClippedDrawer>
    ),
  },  
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  }
  
];

export default appRoutes;
