import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";
import cafeimg1 from "./images/카페임시이미지.jpeg";
import filterimg from "./images/filter.png";
import AxiosApi from "./api/AxiosApi";
import Header from "../now/component/Header";
import Modal from "./Modal";
import CafeFilterModal from "./CafeFilterModal";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  /* padding: 50px; */

  button{
    position: absolute;
    left: 35px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70px;
    height: 35px;
    margin: 50px 0 30px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    font-weight: 600;
    color: black;
    cursor: pointer;

    /* &:hover{
      border: none;
      color: white;
      background-color: #FFCFDA;
    } */
  }

  img{
    width: 15px;
    height: 15px;
  }
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  margin-top: 100px;
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

  // 모달창
  const [modalOpen, setModalOpen] = useState(false);
  // 필터 값 저장
  const [selectOption, setSelectOption] = useState("");
  
  const filterModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // 필터 값으로 결과 조회
  const confirm = () => {
    console.log(selectOption);
    setModalOpen(false);
  }

  const selectCafe = (cafeNum) => {
    setCafeNum(cafeNum);
    navigate('/cafe/detail');
  }

  return(
    <>
    <Container> 
    <Box>
    <button className="filter" onClick={filterModal}><img src={filterimg} alt="필터이미지" /><p>필터</p></button>
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
    <Modal open={modalOpen} type={true} close={closeModal} confirm={() => confirm(selectOption)} header="필터">
    <CafeFilterModal selectOption={selectOption} setSelectOption={setSelectOption}/>
    </Modal>
    </>
  );
};

export default CafeMain;
