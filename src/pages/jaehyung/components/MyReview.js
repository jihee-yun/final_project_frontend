import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import Header from "./Header";
import Footer from "./Footer";

const Review = styled.div`
  width: 100%;
  height: 800px;
`;

const MyReview = () => {

  return (
    <div>
      <Header />
      <Review>


      </Review>
      <Footer />    
    </div>

    
  );
};
export default MyReview;