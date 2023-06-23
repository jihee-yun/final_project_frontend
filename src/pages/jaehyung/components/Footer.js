import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Foot = styled.div`
  width: 100%;
  height: 200px;
  background-color: #7D5A5A ;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <Foot onClick={()=> navigate("/mypage")}>방치중</Foot>
    </>
  );
};
export default Footer;