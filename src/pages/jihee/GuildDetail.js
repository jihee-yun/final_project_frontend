import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";
import cafeimg1 from "./images/카페임시이미지.jpeg";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
`;

const Top = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
`;

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  z-index: 1;

  .box{
    position: relative;
    width: 95%;
    margin: 0 auto;
    height: 170px;
    border-radius: 5px;
    background-color: white;
    margin-top: -30px;
    z-index: 1;
    text-align: center;
    
    .content{
      position: absolute;
      top: calc(100% - 95px); 
      left: calc(50% - 47px); 
      button{
        height: 25px;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        background-color: #FFCFDA;
      }
    }
  }
  .member-profile{
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    z-index: 2;
    top: calc(100% - 220px); 
    left: calc(50% - 53px); 
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
  }
`;

const Middle = styled.div`
  position: absolute;
  width: 100%;
  background-color: #FAFAFA;
  z-index: 0;

  p{
    width: 80%;
    margin: 0 auto;

    &:first-child {
      padding-top: 180px;
    }
    .member-box{
    }
   
  }

`;

const GuildDetail = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { guildNum } = context;

  console.log(guildNum);

  return(
    <>
    <Container>
      <Top>
        <img src={cafeimg1} alt="길드썸네일" />
      </Top>
      <Box>
        <div className="box">
          <div className="content">
          <button>방장</button>
          <h2>길드 제목</h2>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${cafeimg1})`}} className="member-profile"></div>
      </Box>
      <Middle>
        <p className="guild ">카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명</p>
        <div className="member-box">
          <p>멤버 소개</p>
        </div>
      </Middle>
    </Container>
    </>
  );
};

export default GuildDetail;