import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";
import report from "./images/report.png";
import review from "./images/review.png";
import Delete from "./images/Delete.png";
import userManage from "./images/userManage.png";



const InfoBlock = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  margin-bottom: 30px;

    .container {
       
    }

    .logo {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
        cursor: pointer;
    }

    .Delete {
        margin-left: -30px;
    }

    
`;




const AdminInfo = () => {

    const navigate = useNavigate("");

  
    const LogoClick = () => {
      navigate('/');
    }

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

    // 이벤트 더보기
    const handleEvent = () => {
      navigate('/manageEvent');
    }

    // 리뷰 더보기
    const handleReview = () => {
      navigate('/manageReview');
    }
    
    // 소모임 더보기
    const handleGuild = () => {
      navigate('/manageGuild');
    }


    return (
      <InfoBlock>
        <div className="cotainer">

            
        </div>

        <div className="logo">
            <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
        </div>

        <div className="form-container">
            
        </div>
     
      </InfoBlock>
    );
  };
  
  export default AdminInfo;