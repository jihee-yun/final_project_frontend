import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import profile from '../images/leeknow.jpg';

const Container = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`

const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`  

const Side = styled.ul`
  .show-menu{
width: 376px;
height: 500px;
position: absolute;
left: 0px;
transition: 1s;
}

.hide-menu{
width: 376px;
height: 500px;
position: absolute;
left: -376px;
transition: 1s;
}
`;




const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <Container> 
      <Profile src={profile}></Profile>
      <Menu>
      <Side className={isOpen ? "show-menu" : "hide-menu"}>
        <Link to="/cafe">카페 찾기</Link>
        <Link to="/guild">길드</Link>
        <Link to="/event">퀘스트</Link>
        <Link to="/couponStore">상점</Link>
      </Side>
      </Menu>
    </Container>
  )
}

export default Sidebar;