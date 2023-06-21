import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import adminReg from "./images/adminReg.png";
import userManage from "./images/userManage.png";
import declaration from "./images/declaration.png";
import plus from "./images/plus.png";
import Xbtn from "./images/Xbtn.png";
import Delete from "./images/Delete.png";
import menubar from "./images/menubar.png";




const InfoBlock = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  margin-bottom: 30px;

    .left_btn {
        display: inline-block;
        cursor: pointer;
    }

    .left_btn img {
        width: 100px;
        height: 80px;
        padding: 10px;
    }

    .category {
        position: fixed;
        left: 0;
        width: 25vw;
        top: 0;
        bottom: 0;
        background-color: #c1c0c0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(-100%);
        padding: 20px;
    }

    .category.active {
        transform: translateX(0);
    }

    .menu-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        gap: 20px;
        cursor: pointer;
    }

    .menu-x img {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .menu-item img {
        width: 90px;
        height: 80px;
        margin-right: 100px;
        margin-bottom: 40px;
    }

    .menu-item span {
        font-size: 16px;
        font-weight: bold;
        margin-top: -30px;
        margin-right: 70px;
        margin-left: -70px;
    }

    .adminReg {
        margin-left: -5px;
    }

    .declaration {
        margin-left: -10px;
    }

    .adminDelete {
        margin-left: -40px;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
        margin-left: 220px;
    }

    .box {
        background-color: #D9D9D9;
        padding: 10px;
        border: 1px solid black;
        margin: 20px;
        width: 330px;
        height: 250px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .box p:last-child {
        margin-left: auto;
    }

    p {
        font-size: 15px;
        margin-top: -210px;
        color: green;
        font-weight: bold;
    }

    .box:nth-child(2),
    .box:nth-child(4) {
        margin-left: 120px;
    }

    .plus {
        width: 20px;
        height: 20px;
        margin-bottom: 120px;
        margin-top: -100px;
        cursor: pointer;
    }

    .inner-box {
        width: 200px;
        height: 150px;
        margin-right: 30px;
        margin-top: 30px;
        margin-bottom: -10px;
        background-color: #EFEFEF;
        border: 1px solid black;
    }

    .adminReg {
        margin-left: 5px;
    }

    .Delete {
        margin-left: -30px;
    }
`;


const AdminInfo = () => {

    const navigate = useNavigate("");

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleMenuItemClick = () => {
        if (menuOpen) {
        closeMenu();
        } else {
        toggleMenu();
        }
    };

    const handleMenuClose = () => {
        closeMenu();
    };

    // 관리자 등록
    const handleAdminReg = () => {
        navigate('/adminReg');
    }

    // 사용자 관리
    const handleUserManage = () => {
        navigate('/userManage');
    }

    // 신고
    const handleDeclaration = () => {
        navigate('/adminReport');
    }

    // 삭제
    const handleDelete = () => {
        navigate('/adminDelete');
    }

    return (
      <InfoBlock>
        <div className="left_btn">
          <img
            src={menubar}
            alt="menubar"
            className={`menubar ${menuOpen ? 'open' : ''}`}
            onClick={handleMenuItemClick}
            />
        </div>

        <div className={`category ${menuOpen ? 'active' : ''}`}>
            <div className="menu-x">
                <img src={Xbtn} alt="Xbtn" className="Xbtn" onClick={handleMenuClose}/>
            </div>

            <div className="menu-item">
                <img src={adminReg} alt="adminReg" className="adminReg" onClick={handleAdminReg}/>
                <span>관리자 등록</span>
            </div>

            <div className="menu-item">
                <img src={userManage} alt="userManage" className="userManage" onClick={handleUserManage}/>
                <span>사용자 관리</span>
            </div>

            <div className="menu-item">
                <img src={declaration} alt="declaration" className="declaration" onClick={handleDeclaration} />
                <span>신고 내역</span>
            </div>

            <div className="menu-item">
                <img src={Delete} alt="Delete" className="Delete" onClick={handleDelete}/>
                <span>삭제</span>
            </div>
        </div>

        <div className="container">
            <div class="box">
                <p>통계관리</p>
            <div className="inner-box"></div>
            <div class="more-wrapper">
                <img src={plus} alt="plus" className="plus"/>
            </div>
            
        </div>

        <div className="box">
            <p>이벤트 관리</p>
        <div className="inner-box"></div>
        <div class="more-wrapper">
            <img src={plus} alt="plus" className="plus"/> 
            </div>
        </div>

        <div className="box">
            <p>리뷰 관리</p>
        <div className="inner-box"></div>
        <div class="more-wrapper">
            <img src={plus} alt="plus" className="plus"/>
        </div>
        </div>

        <div className="box">
            <p>켈린더</p>
        <div className="inner-box"></div>    
        <div class="more-wrapper">
            <img src={plus} alt="plus" className="plus"/>
        </div>
        </div>
        </div>
      </InfoBlock>
    );
  };
  
  export default AdminInfo;