import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../now/component/Header";
import Footer from "../../now/component/Footer";
import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  
  display: flex;
  justify-content: center;
`;
const Detail = styled.div`
  width: 100%;
  min-width: 400px;
  max-width: 1000px;
  /* height: 1000px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 2px solid yellow; */
`;
// 결제 내역, 포인트 내역 선택 박스
const RowBox = styled.div`
  margin-top: 1%;
  margin-bottom: 2%;
`;
// 포인트 내역, 결제 내역 버튼
const SelectButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 30px;
  margin-right: 30px;
  border: 1px solid #7d5a5a;
  border-radius: 15px;
  background-color: ${({ selected }) => (selected ? "#F3E1E1" : "white")};
  cursor: pointer;

  &:hover {
    background-color: #F3E1E1;
  }
`;
// 포인트, 결제 버튼 박스
const SelectBox = styled.div`
  width: 90%;
  height: 80px;
  margin-top: 1%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 세부 정보 목록 보여주는 박스
const ContentBox = styled.div`
  width: 90%;
  min-width: 400px;
  height: 780px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const MyPoint = () => {
  const [selectedButton, setSelectedButton] = useState("point");

  // 포인트, 결제 차이
  const handleTypeButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };




  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <RowBox>
          <SelectButton
            selected={selectedButton === "point"}
            onClick={() => handleTypeButtonClick("point")}
            >
            포인트 내역
          </SelectButton>
          <SelectButton
            selected={selectedButton === "payment"}
            onClick={() => handleTypeButtonClick("payment")}
            >
            결제 내역
          </SelectButton>
          </RowBox>
          <SelectBox>

          </SelectBox>
          <ContentBox>
            {selectedButton === "point" ? (
              <></>              
              
              ) : (
              <></>
              
              
            )}
          </ContentBox>
        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>
  );
};
export default MyPoint;