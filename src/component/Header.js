import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserStore";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderContainer = styled.header`
  padding: 1.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  height: 150px;
  z-index: 98;

  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .logo {
    padding-left: 60px;
  }
  .mypage {
    margin-left: 10px;
    padding: 0;
    cursor: pointer;
    border: 0;
    background-color: white;
  }
    `;

const Rightbox = styled.div`
  display: flex;

  .member {
    align-self: flex-start;
    padding-right: 40px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 13px;
    display: flex;
    a {
      text-decoration: none;
      color: #6e6e6e;
    }
  }
`;

const HamburgerBtn = styled.button`
  margin-top: -5px;
  margin-right: 60px;
  margin-left: -10px;
  padding: 0;
  color: black;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
  border:none;
`;

const NavContainer = styled.nav `
  width: 100%;
    
  a {
    text-decoration: none;
    color: white;
  }
  .Nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    padding-right: 20px;
    height: 60px;
    background-color: #FFD0E4;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 200px;
  }
  .search-bar {
    width: 100%;
    height: 30px;
    border-radius: 40px;
    border: solid white;
    padding: 0 15px;
  }
`;
const Navlink = styled(Link) `
  width: 150px;
  height: 40px;
  line-height: 40px;
  font-size: 1rem;
  font-weight: bold;
  color: white;

  &:hover {
    color: #000;    
  }
  .MyPage {
    font-size: 2.5rem;
  }
`;


const Header = () => {
  const { isSidebar, setIsSidebar, isLogin, setIsLogin,  userName, setUserName, 
    setGrantType, setAccessToken,setRefreshToken, setUserNum, setUserAuthoruty}  = useContext(UserContext);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // 반응형 UI 적용
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 화면 크기가 768px 이하인 경우
    };
    window.addEventListener("resize", handleResize);
    // 초기 렌더링 시 한 번 호출
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  // 로그아웃 버튼 누르면 함수 실행
  const handleLogout = () => {
    setGrantType("");
    setAccessToken("");
    setRefreshToken("");
    setUserNum(0);
    setUserName("");
    setUserAuthoruty("");
    setIsLogin(false);
    navigate("/");
  }
  
  return(
    <>
      <HeaderContainer>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="로고" style={{width: "150px", height: "150px"}} />
          </Link>
        </div>
        <Rightbox>
        {isLogin ? (
            <div className="member">
              <p>{userName}님</p>
              <button className="mypage" onClick={() => navigate("/mypage")}>회원정보</button>
              <button className="mypage" onClick={handleLogout}>로그아웃</button>
            </div>
          ) : (
            <div className="member">
              <Link to="/memberlogin" style={{ marginRight: "10px" }}>로그인</Link>
              <Link to="/membersignup">회원가입</Link>
            </div>
          )}
          {isMobile && (
            <HamburgerBtn className="HamburgerBtn" onClick={() => setIsSidebar("0")}>
              <MenuIcon style={{ fontSize: 30, marginRight: 10 }} />
            </HamburgerBtn>
          )}
        </Rightbox>
        </HeaderContainer>
        {!isMobile && (
        <NavContainer>
          <ul className="Nav">
            <Navlink to="/cafe">카페 찾기</Navlink>
            <Navlink to="/guild">길드</Navlink>
            <Navlink to="/event">이벤트</Navlink>
            <Navlink to="/couponStore">상점</Navlink>
            <div className="search">
              <input
                type="search"
                className="search-bar"
              //   value={searchInput}
              //   onChange={handleSearchInputChange}
              //   onKeyDown={handleKeyDown}
              />
              <SearchIcon
                style={{ fontSize: 30, marginRight: 10, fill: "white" }}
              //   onClick={handleSearchInconClick}
              />
            </div>
          </ul>
        </NavContainer>
      )}
    </>
  );
};

export default Header;