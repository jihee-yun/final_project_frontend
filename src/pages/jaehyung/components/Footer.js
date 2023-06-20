import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Foot = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const navigate = Navigate();

  return (
    <>
      <Foot onClick={()=> navigate("/mypage")}></Foot>
    </>
  );
};
export default Footer;