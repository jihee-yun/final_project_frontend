import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Head = styled.div`
  width: 100%;
  height: 200px;
  background-color: #F3E1E1;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Head onClick={()=> navigate("/mypage")}>공사중</Head>
    </>
  );
};
export default Header;