import './App.css';
import DrawerAppBar from '../DrawerAppBar/DrawerAppBar';
import CssBaseline from '@mui/material/CssBaseline';
import PermanentDrawerLeft from '../PermanentDrawerLeft/PermanentDrawerLeft';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import appRoutes from '../../appRoutes';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <CssBaseline />
        <Routes>
          {appRoutes.map(({ ...routeProps }) =>
            <Route {...routeProps} key={routeProps.path} />
          )}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
