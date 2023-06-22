import React from "react";
import styled from "styled-components";
import Logo from "../now/images/Logo.jpeg";
import { Link } from "react-router-dom";
// import PersonIcon from '@mui/icons-material/Person';

const HeaderContainer = styled.header`
    padding: 1.8rem 0;
    border-bottom: 0.1rem solid #f1ede4;
    display: flex;
    align-items: center;
    justify-content: center;
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
        gap: 5px;
        text-align: center;
        padding-right: 20px;
    }
`;


const Navlink = styled(Link) `
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 1.8em;

    &:hover {
        font-weight: bold;
    }

  .MyPage {
    font-size: 1.8em;
    margin-top: -5px;
  }

`;



const Header = () => {
    
    return(
        <>
        <HeaderContainer>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="로고" style={{width: "200px", height: "150px"}} />
          </Link>
        </div>
        {/* <nav className="NavContainer">
                <ul className="Nav">
                    <Navlink to="/cafemain">모험</Navlink>
                    <Navlink to="/guild">길드</Navlink>
                    <Navlink to="/event">퀘스트</Navlink>
                    <Navlink to="/couponStore">상점</Navlink>
                    <Navlink><PersonIcon style={{color: "#FFD0E4"}} className="MyPage"/></Navlink>
                </ul>
        </nav> */}
        </HeaderContainer>
        <NavContainer>
                <ul className="Nav">
                    <Navlink to="/cafemain">모험</Navlink>
                    <Navlink to="/guild">길드</Navlink>
                    <Navlink to="/event">퀘스트</Navlink>
                    <Navlink to="/couponStore">상점</Navlink>
                    {/* <Navlink><PersonIcon style={{color: "#FFD0E4"}} className="MyPage"/></Navlink> */}
                </ul>
        </NavContainer>
        </>
    );
};

export default Header;