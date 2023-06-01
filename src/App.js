import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Cats from "./components/Cats";
import Favorites from "./components/Favorites";
import Box from "@mui/material/Box";


function App() {
  return (
    <Box>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='cats' element={<Cats />}></Route>
      <Route path='favorites' element={<Favorites />}></Route>
    </Routes>
    </Box>
  );
}

export default App;
