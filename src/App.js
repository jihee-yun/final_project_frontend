import './App.css';
import SignUp from './pages/taehoon/SignUp';
import Login from './pages/taehoon/Login';
import Cafe from './pages/jihee/Cafe';
import Guild from './pages/jihee/Guild';
import Event from './pages/yeabin/Event';
import Roulette from './pages/yeabin/Roulette';
import FindPw from './pages/taehoon/FindPw';
import Admin from './pages/taehoon/Admin';
import AdminInfo from './pages/taehoon/AdminInfo';
import CouponStore from './pages/yeabin/CouponStore';
import PointStore from './pages/yeabin/PointStore';
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
        <Route path='/findpw' element={<FindPw/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminInfo' element={<AdminInfo/>}/>
        <Route path='/couponStore' element={<CouponStore/>}/>
        <Route path='/pointStore' element={<PointStore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
