import './App.css';
import SignUp from './pages/taehoon/SignUp';
import Login from './pages/taehoon/Login';
import Cafe from './pages/jihee/Cafe';
import Guild from './pages/jihee/Guild';
import Event from './pages/yeabin/Event';
import Roulette from './pages/yeabin/roulette';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cafe" element={<Cafe/>}/>
        <Route path="/guild" element={<Guild/>}/>
        <Route path='/event' element={<Event/>} />
        <Route path='/roulette' element={<Roulette/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
