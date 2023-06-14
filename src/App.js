import './App.css';
import SignUp from './pages/taehoon/SignUp';
import Login from './pages/taehoon/Login';
import CafeMain from './pages/jihee/CafeMain';
import GuildMain from './pages/jihee/GuildMain';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cafe" element={<CafeMain/>}/>
        <Route path="/guild" element={<GuildMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
