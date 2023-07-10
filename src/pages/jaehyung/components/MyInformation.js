import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import MemberApi from "../api/MemberApi";
import { UserContext } from "../../../context/UserStore";
import Header from "./Header";
import Footer from "./Footer";
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

const SelectBox = styled.div`
  width: 90%;
  height: 80px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 90%;
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

const MyInformation = () => {


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