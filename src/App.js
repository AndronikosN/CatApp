import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Cats from "./components/Cats";
import Favorites from "./components/Favorites";
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({
  palette: {
    mode:'light',
  },
})

function App() {
  return (
    <div className='App'>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='cats' element={<Cats />}></Route>
      <Route path='favorites' element={<Favorites />}></Route>
    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
