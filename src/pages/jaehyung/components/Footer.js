import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Foot = styled.div`
  width: 100%;
  height: 200px;
  background-color: lightgray;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Foot onClick={()=> navigate("/mypage")}></Foot>
    </>
  );
};
export default Footer;