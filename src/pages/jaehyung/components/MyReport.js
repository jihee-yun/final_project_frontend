import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
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
`;
const Detail = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 2px solid yellow; */
`;

const SelectBox = styled.div`
  width: 90%;
  height: 80px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const ContentBox = styled.div`
  width: 90%;
  height: 780px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;

`;

const MyReport = () => {

  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <SelectBox>
            <p>1:1 문의 / 신고내역</p>
          </SelectBox>
          <ContentBox>

          </ContentBox>


        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>
  );
};
export default MyReport;