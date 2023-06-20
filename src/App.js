import './App.css';
import UserStore from './context/UserStore';
import SignUp from './pages/taehoon/SignUp';
import Login from './pages/taehoon/Login';
import Cafe from './pages/jihee/Cafe';
import CafeMain from './pages/jihee/CafeMain';
import CafeDetail from './pages/jihee/CafeDetail';
import Guild from './pages/jihee/Guild';
import GuildDetail from './pages/jihee/GuildDetail';
import NewGuild from './pages/jihee/NewGuild';
import Event from './pages/yeabin/Event';
import Roulette from './pages/yeabin/Roulette';
import FindPw from './pages/taehoon/FindPw';
import Admin from './pages/taehoon/Admin';
import AdminInfo from './pages/taehoon/AdminInfo';
import CouponStore from './pages/yeabin/CouponStore';
import PointStore from './pages/yeabin/PointStore';
import FindID from './pages/taehoon/FindID';
import AdminReg from './pages/taehoon/AdminReg';
import AdminDelete from './pages/taehoon/AdminDelete';
import AdminDeclaration from './pages/taehoon/ AdminDeclaration';
import UserManage from './pages/taehoon/UserManage';
import MyPage from './pages/jaehyung/MyPages';
import MyReview from './pages/jaehyung/components/MyReview'
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
        <Route path='/adminReg' element={<AdminReg/>}/>
        <Route path='/adminDelete' element={<AdminDelete/>}/>
        <Route path='/adminDeclaration' element={<AdminDeclaration/>}/>
        <Route path='/userManage' element={<UserManage/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/myreview' element={<MyReview/>}/>
        
        
      </Routes>
    </BrowserRouter>
    </UserStore>
  );
}

export default App;
