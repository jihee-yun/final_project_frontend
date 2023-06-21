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
import NewGuildSecond from './pages/jihee/NewGuildSecond';
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
import AdminReport from './pages/taehoon/AdminReport';
import UserManage from './pages/taehoon/UserManage';
import MyPage from './pages/jaehyung/MyPages';
import MyReview from './pages/jaehyung/components/MyReview';
import MyChallenge from './pages/jaehyung/components/MyChallenge';
import MySomoim from './pages/jaehyung/components/MySomoim';
import MyEvent from './pages/jaehyung/components/MyEvent';
import MyCalendar from './pages/jaehyung/components/MyCalendar';
import MyPoint from './pages/jaehyung/components/MyPoint';
import MyRanking from './pages/jaehyung/components/MyRanking';
import MyInformation from './pages/jaehyung/components/MyInformation';
import MyReport from './pages/jaehyung/components/MyReport';
import Report from './pages/taehoon/Report';
import ChallengeMain from './pages/yeabin/ChallengeMain';
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
        <Route path="/createguild/second" element={<NewGuildSecond/>}/>
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
        <Route path='/adminReport' element={<AdminReport/>}/>
        <Route path='/userManage' element={<UserManage/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/mypage/review' element={<MyReview/>}/>
        <Route path='/mypage/challenge' element={<MyChallenge/>}/>
        <Route path='/mypage/somoim' element={<MySomoim/>}/>
        <Route path='/mypage/event' element={<MyEvent/>}/>
        <Route path='/mypage/calendar' element={<MyCalendar/>}/>
        <Route path='/mypage/point' element={<MyPoint/>}/>
        <Route path='/mypage/ranking' element={<MyRanking/>}/>
        <Route path='/mypage/information' element={<MyInformation/>}/>
        <Route path='/mypage/report' element={<MyReport/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/challengeMain' element={<ChallengeMain/>}/>
      </Routes>
    </BrowserRouter>
    </UserStore>
  );
}

export default App;
