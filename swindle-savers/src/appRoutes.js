import React from 'react';
import ClippedDrawer from './Components/ClippedDrawer/ClippedDrawer';
import SwindlesPage from './Components/SwindlesPage/SwindlesPage';
import AlertsPage from './Components/AlertsPage/AlertsPage';
import AboutPage from './Components/AboutPage/AboutPage';

const appRoutes = [
  {
    path: '/',
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
  
];

export default appRoutes;
