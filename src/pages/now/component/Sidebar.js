import React, { useState, useRef, useEffect} from 'react'
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import profile from '../images/leeknow.jpg';
import MenuIcon from '@mui/icons-material/Menu';



const Container = styled.div`


`
const SidebarContainer = styled.div`
background-color: white;
  border-left: 2px solid #202020;
  top: 0;
  bottom: 0;
  right: 0;
  transition: 0.4s ease;
  height: 100%;
  display: none;
  

`
const SidebarTop=styled.div`
width: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
  .xButton {
  position: relative;
  left: -50px;
  top: 10px;
  width: 40px;
  height: 40px;
  z-index: 99;
  transition: 0.8s ease;
  border: 1px solid #202020;
  border-radius: 40px;
  overflow: hidden;
  }

`;
const Profile = styled.img`
 width: 200px;
  height: 200px;
  margin: 16px 16px 16px 16px;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  @media screen and (max-width: 1024px) {
    margin-right: 16px;
  }

`

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

`  



const Sidebar = ({ width=280 }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();
  

  const toggleMenu = () => {
    if (xPosition === 0) {
      setX(-width);
      setOpen(false);
    } else {
      setX(0);
      setOpen(true);
    }
  };

   // 사이드바 외부 클릭시 닫히는 함수
   const handleClose = async e => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
       setX(-width); 
       setOpen(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  })


  return (
     <Container>
      <SidebarContainer ref={side} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
      <SidebarTop>
      <button onClick={toggleMenu} className='xButton'>
  {isOpen ? <span>X</span> : <MenuIcon />}
</button>
      <Profile src={profile}/>
      </SidebarTop>
      <Menu>
        <Link to="/cafe">카페 찾기</Link>
        <Link to="/guild">길드</Link>
        <Link to="/event">퀘스트</Link>
        <Link to="/couponStore">상점</Link>
      </Menu>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar;

