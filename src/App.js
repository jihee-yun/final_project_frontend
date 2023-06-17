import './App.css';
import UserStore from './context/UserStore';
import SignUp from './pages/taehoon/SignUp';
import Login from './pages/taehoon/Login';
import Cafe from './pages/jihee/Cafe';
import CafeMain from './pages/jihee/CafeMain';
import CafeDetail from './pages/jihee/CafeDetail';
import Guild from './pages/jihee/Guild';
import GuildDetail from './pages/jihee/GulidDetail';
import NewGuild from './pages/jihee/NewGuild';
import Event from './pages/yeabin/Event';
import Roulette from './pages/yeabin/Roulette';
import FindPw from './pages/taehoon/FindPw';
import Admin from './pages/taehoon/Admin';
import AdminInfo from './pages/taehoon/AdminInfo';
import CouponStore from './pages/yeabin/CouponStore';
import PointStore from './pages/yeabin/PointStore';
import FindID from './pages/taehoon/FindID';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <UserStore>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cafe" element={<Cafe/>}/>
        <Route path="/cafemain" element={<CafeMain/>}/>
        <Route path="/cafedetail" element={<CafeDetail/>}/>
        <Route path="/guild" element={<Guild/>}/>
        <Route path="/guilddetail" element={<GuildDetail/>}/>
        <Route path="/createguild" element={<NewGuild/>}/>
        <Route path='/event' element={<Event/>} />
        <Route path='/roulette' element={<Roulette/>} />
        <Route path='/findpw' element={<FindPw/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminInfo' element={<AdminInfo/>}/>
        <Route path='/couponStore' element={<CouponStore/>}/>
        <Route path='/pointStore' element={<PointStore/>}/>
        <Route path='/findId' element={<FindID/>}/>
      </Routes>
    </BrowserRouter>
    </UserStore>
  );
}

export default App;
