import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

const Container = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  border: 2px solid yellow;
  justify-content: right;
`;

const MyInformation = () => {

  return (
    <>
      <Header />
      <Container>
        <SideMenu />
        <Detail>



        </Detail>
      </Container>
      <Footer />    
    </>

    
  );
};
export default MyInformation;