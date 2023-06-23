import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";
import cafeimg1 from "./images/카페임시이미지.jpeg";
import AxiosApi from "./api/AxiosApi";
import Header from "../now/Header";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  /* padding: 50px; */
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CafeBox = styled.div`
  width: 250px;
  height: 300px;
  margin: 30px 15px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 10px;
  box-shadow: 0 3px 3px #A4A4A4;
  cursor: pointer;

  &:hover{
    transform: scale(1.02);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
  }

  .background {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,.7) 50%, rgba(0,0,0,0) 100%);
  }

  .content {
    position: absolute;
    padding: 20px;
    bottom: -20px;
    color: white;
    
    p {
      font-weight: bold;
      &:nth-child(1) {
        font-size: .7rem;
        text-decoration: underline #FFCFDA 3px;
        text-underline-offset: 5px;
      }
      &:nth-child(2) {
        color: #FFCFDA;
        font-size: .9rem;
      }
      &:nth-child(3) {
        font-size: 1.1rem;
      }
    }
  }
`;


const CafeMain = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { region, setCafeNum } = context; // cafeNum 유저스토어에 저장하기

    // 카페 정보 받아오기
    const [cafeInfo, setCafeInfo] = useState("");

    // useEffect(() => {
    //   const cafeInfo = async() => {
    //     const response = await AxiosApi.cafeInfoGet(region);
    //     if(response.status === 200) setCafeInfo(response.data);
    //   };
    //   cafeInfo();
    // }, [region]);

  console.log(region);

  const selectCafe = (cafeNum) => {
    setCafeNum(cafeNum);
    navigate('/cafe/detail');
  }

  return(
    <>
    <Header />
    <Container> 
    <Box>
    <CafeBox onClick={() => selectCafe("카페번호")}>
      <img className="img" src={cafeimg1} alt="이미지"/>
      <div className="background"></div>
      <div className="content">
        <p>지역</p>
        <p>카페 이름</p>
        <p>카페 한줄 소개하는 부분입니다아아아아아아</p> 
      </div>
    </CafeBox>
    <CafeBox></CafeBox>
    <CafeBox></CafeBox>
    <CafeBox></CafeBox>
    </Box>
    </Container>
    </>
  );
};

export default CafeMain;
