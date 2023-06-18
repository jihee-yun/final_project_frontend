import React, { useState, useEffect } from "react";
import styled from "styled-components";
import 관리자등록 from "./images/관리자등록.png";
import 사용자관리 from "./images/사용자관리.png";
import 삭제 from "./images/삭제.png";
import 신고버튼 from "./images/신고버튼.png";
import 바로가기 from "./images/바로가기.png";
import x버튼 from "./images/x버튼.png";

const InfoBlock = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  margin-bottom: 30px;

  .left_btn {
    display: inline-block;
  }

  .left_btn img {
    width: 100px;
    height: 80px;
    padding: 10px;
  }

  .category {
    position: fixed;
    left: 0;
    width: 30vw;
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
    width: 100px;
    height: 80px;
    margin-right: 10px;
    margin-bottom: 40px;
  }

  .menu-item span {
    font-size: 18px;
    font-weight: bold;
    margin-top: -30px;
  }

  .신고버튼 {
    margin-left: -50px;
  }

  .삭제 {
    margin-left: -40px;
  }
`;

const AdminInfo = () => {
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

    return (
      <InfoBlock>
        <div className="left_btn">
          <img
            src={바로가기}
            alt="바로가기"
            className={`바로가기 ${menuOpen ? 'open' : ''}`}
            onClick={handleMenuItemClick}
            />
        </div>
  
        <div className={`category ${menuOpen ? 'active' : ''}`}>
        <div className="menu-x">
            <img src={x버튼} alt="x버튼" className="x버튼" onClick={handleMenuClose}/>
        </div>

        <div className="menu-item">
            <img src={관리자등록} alt="관리자등록" className="관리자등록" />
            <span>관리자 등록</span>
          </div>

          <div className="menu-item">
            <img src={사용자관리} alt="사용자관리" className="사용자관리" />
            <span>사용자 관리</span>
          </div>

          <div className="menu-item">
            <img src={신고버튼} alt="신고버튼" className="신고버튼" />
            <span>신고</span>
          </div>

          <div className="menu-item">
            <img src={삭제} alt="삭제" className="삭제" />
            <span>삭제</span>
          </div>
        </div>
      </InfoBlock>
    );
  };
  
  export default AdminInfo;