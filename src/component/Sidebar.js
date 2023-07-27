import { useContext, navigate, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { styled } from 'styled-components';
import profile from '../images/leeknow.jpg';
import { UserContext } from "../context/UserStore";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AxiosApi from '../api/AxiosApi';

const SidebarContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${(props) => props.Xlocation};
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border-radius: 10px;
  background: #F2F2F2;
  z-index: 100;
  background-color: #F2F2F2;

  /* &.active {
    right: 0px;
    trans
  } */
`;
const SidebarTop = styled.div`
  display: flex;
  justify-content: flex-end;
  .xButton {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    display: flex;
    color: black;
    align-items: center;
    &:active {
      background: #000000;
      color: white;
    }
  }
  
`;

const ProfileBox = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .userName {
    align-self: center;
  }

`

const Profile = styled.img`
  width: 200px;
  height: 200px;
  margin: 16px 16px 16px 16px;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;

`


const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style:none;
`  
const NavLink = styled(Link) `
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  color: inherit;
  align-self: center;
  color: #2E2E2E;
`

const Sidebar = () => {
  const { isSidebar, setIsSidebar, isLogin, setIsLogin,  userName, setUserName, 
    setGrantType, setAccessToken,setRefreshToken, userNum, setUserNum, userAuthority, setUserAuthoruty}  = useContext(UserContext);
    const [sideBarInfo, setSideBarInfo] = useState([]);

  // 로그아웃 버튼 누르면 함수 실행
  const handleLogout = () => {
    setGrantType("");
    setAccessToken("");
    setRefreshToken("");
    setUserNum(0);
    setUserName("");
    setUserAuthoruty("");
    setIsLogin(false);

    // 로컬스토리지에서 제거
    localStorage.removeItem("grantType");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userNum");
    localStorage.removeItem("userName");
    localStorage.removeItem("userAuthority");
    localStorage.removeItem("isLogin");
    
    navigate("/");
  }

  // useEffect(() => {
  //   const getSidebarInfo = async (memberNum) => {
  //     if(isSidebar && isLogin) {
  //       const memInfo = await AxiosApi.getMemberInfo(memberNum);
  //       setSideBarInfo(memInfo.data);
  //       console.log(memInfo);
  //     } else {
  //       setSideBarInfo([]);
  //     }
  //   };
  //   getSidebarInfo(userNum)
  // })

  return (

      <SidebarContainer  Xlocation={isSidebar}>
      <SidebarTop>
      <button className="xButton" onClick={() => setIsSidebar("-300px")}>
          <CloseRoundedIcon />
        </button>
      </SidebarTop>
      {isLogin ? (
      <ProfileBox>
      <Profile src={profile}/>
      <div className='userName'>{userName}</div>
      </ProfileBox>
      ) : (
        <ProfileBox>
        <Profile src={profile}/>
        <div className='userName'>로그인</div>
        </ProfileBox>
      )}
      <Menu>
        <NavLink to="/cafe">카페 찾기</NavLink>
        <NavLink to="/guild">길드</NavLink>
        <NavLink to="/event">이벤트</NavLink>
        <NavLink to="/couponStore">상점</NavLink>
      </Menu>
      </SidebarContainer>
     

  );
};

export default Sidebar;