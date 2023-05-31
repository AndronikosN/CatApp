import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Cats from "./components/Cats";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='cats' element={<Cats />}></Route>
      <Route path='favorites' element={<Favorites />}></Route>
    </Routes>
    </>
  );
}

export default App;
