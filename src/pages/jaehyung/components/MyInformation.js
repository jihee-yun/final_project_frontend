import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import MemberApi from "../api/MemberApi";
import { UserContext } from "../../../context/UserStore";
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
  align-items: center;
`;
const Detail = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid yellow;
`;
// 상세 페이지 상단 선택 박스(회원 정보 수정, 알림 설정)
const SelectBox = styled.div`
  width: 90%;
  min-width: 500px;
  height: 50px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 90%;
  min-width: 500px;
  height: 780px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const SpecificBox = styled.div`
  margin: 20px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  margin-top: 5px;
  border: 1px solid blue;
`;
const InformationBox = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Introinput = styled.input`
  width: 90%;
  height: 100px;
`;
const IntroButton = styled.button`

`;
// 각 박스별 정보 표시 p태크
const InfoType = styled.p`
  width: 80%;
  min-width: 100px;
`;
// 핸드폰 번호 수정 input
const PhoneInput = styled.input`
  width: 80%;
  min-width: 200px;
  height: 30px;
  margin-bottom: 5px;
  border: 0;
  background-color: #eee;
  &:focus {
    outline: none;
  }
`;
// 핸드폰 정보 수정 버튼
const PhoneChangeButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  color: white;
  //text-shadow: -.5px -.5px 0 black, .5px -.5px 0 black, -.5px .5px 0 black, .5px .5px 0 black;
  background-color: #F1D1D1;
  border: 0;
  cursor: pointer;
`;


const MyInformation = () => {
  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);



  // 한줄 소개 수정
  const handleIntroChange = async () => {
    const intro = document.getElementById("intro").value;
    try {
      const rsp = await MemberApi.introUpdate(intro);
      if(rsp.status) {
        console.log("한줄소개 업데이트 성공: ", rsp.data);
      }
    } catch(error) {
      console.log("한줄소개 업데이트 실패: ", error);
    }


  }

  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <SelectBox>
            회원 정보
          </SelectBox>
          <ContentBox>
            <SpecificBox>
              <TitleBox>내 소개</TitleBox>
              <InformationBox>
                <Introinput id="intro" type="text"></Introinput>
              </InformationBox>
              <IntroButton onclick={handleIntroChange}>변경하기</IntroButton>
            </SpecificBox>
            <SpecificBox>
              <InfoType>전화번호 변경(-없이 숫자만 입력)</InfoType>
              <PhoneInput id="phone" type="text"></PhoneInput>
              <PhoneChangeButton>저장하기</PhoneChangeButton>
            </SpecificBox>
            <SpecificBox>

            </SpecificBox>
          </ContentBox>


        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>  
  );
};
export default MyInformation;