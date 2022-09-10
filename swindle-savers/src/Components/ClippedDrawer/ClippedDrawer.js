import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom'
import PhishingIcon from '@mui/icons-material/Phishing';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const drawerWidth = 240;

export default function ClippedDrawer({ children }) {
  const nav = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Swindle Savers
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton onClick={() => nav('/swindles')}>
                <ListItemIcon>
                    <PhishingIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Swindles'} />
            </ListItemButton>
            <ListItemButton onClick={() => nav('/alerts')}>
                <ListItemIcon>
                    <NotificationsIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Text Alerts'} />
            </ListItemButton>
            <ListItemButton onClick={() => nav('/report')}>
                <ListItemIcon>
                    <AddCircleIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Report'} />
            </ListItemButton>
            <ListItemButton onClick={() => nav('/about')}>
                <ListItemIcon>
                    <InfoIcon /> 
                </ListItemIcon>
                <ListItemText primary={'About Us'} />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
