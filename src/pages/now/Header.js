import React from "react";
import styled from "styled-components";
import Logo from "../now/images/logo.png";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const HeaderContainer = styled.header`
    padding: 1.8rem 0;
    border-bottom: 0.1rem solid #FFD0E4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    height: 150px;
    z-index: 100;

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

    .rightbox {
        display: flex;
        flex-direction: column;
    }
    .member {
        margin-bottom: 10px;

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
    border: 3px solid #FFD0E4;
    padding: 0 15px;
  }
    `;

    const NavContainer = styled.nav `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
    
    a {
        text-decoration: none;
        color: #000;
    }
    .Nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        padding-right: 20px;
    }
`;


const Navlink = styled(Link) `
    width: 150px;
    height: 40px;
    line-height: 40px;
    font-size: 1rem;

    &:hover {
        font-weight: bold;
    }

  .MyPage {
    font-size: 2.5rem;
  }

`;



const Header = () => {
    
    return(
        <>
        <HeaderContainer>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="로고" style={{width: "150px", height: "150px"}} />
          </Link>
        </div>
        <div className="rightbox">
        <div className="member">
                <Link to="/login" style={{marginRight: "10px"}}>로그인</Link>
                <Link to="/signup">가입</Link>
        </div>
        <div className="search">
        <input
          type="search"
          className="search-bar"
        //   value={searchInput}
        //   onChange={handleSearchInputChange}
        //   onKeyDown={handleKeyDown}
        />
        <SearchIcon
          style={{fontSize: 30, marginRight: 10}}
        //   onClick={handleSearchInconClick}
        />
      </div>
      </div>
        </HeaderContainer>
        <NavContainer>
                <ul className="Nav">
                    <Navlink to="/cafemain">카페 찾기</Navlink>
                    <Navlink to="/guild">길드</Navlink>
                    <Navlink to="/event">퀘스트</Navlink>
                    <Navlink to="/couponStore">상점</Navlink>
                    <Navlink><PersonIcon style={{color: "#FFD0E4"}} className="MyPage"/></Navlink>
                </ul>
        </NavContainer>
        </>
    );
};

export default Header;