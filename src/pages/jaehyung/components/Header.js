import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

const Head = styled.button`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const navigate = Navigate();

  return (
      <Head onClick={()=> navigate("/mypage")}></Head>
  );
};
export default Header;