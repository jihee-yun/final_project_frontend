import { useContext } from 'react'
import { Link } from "react-router-dom";
import { styled } from 'styled-components';
import profile from '../images/leeknow.jpg';
import { UserContext } from "../context/UserStore";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

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
    justify-content: center;
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

const MenuBox = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Menu = styled.ul`
  
  display: flex;
  flex-direction: column;
  align-self: center;
  list-style:none;
`  
const NavLink = styled(Link) `
  text-decoration: none;
  margin-bottom: 30px;
  font-size: 30px;
  color: inherit;
  align-self: center;
`

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useContext(UserContext);


  return (

      <SidebarContainer  Xlocation={isSidebar}>
       
      <SidebarTop>
      <button className="xButton" onClick={() => setIsSidebar("-300px")}>
          <CloseRoundedIcon />
        </button>
      </SidebarTop>
      <ProfileBox>
      <Profile src={profile}/>
      <div className='userName'>리빗</div>
      </ProfileBox>
      <MenuBox>
      <Menu>
        <NavLink to="/cafe">카페 찾기</NavLink>
        <NavLink to="/guild">길드</NavLink>
        <NavLink to="/event">이벤트</NavLink>
        <NavLink to="/couponStore">상점</NavLink>
      </Menu>
      </MenuBox>
      
      </SidebarContainer>
     

  );
};

export default Sidebar;

