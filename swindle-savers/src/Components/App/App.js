import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
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
