import React from "react";
import styled from "styled-components";
import logo from "../jihee/images/logo.png";

const ModalBox = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;

  .logo img {
    width: 100px;
    height: 100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: .9rem;
      font-weight: bold;
      color: #424242;
    }
  }
`;

const CompleteModal = ({content}) => {

  return(
    <>
    <ModalBox> 
      <Box>
      <div className="content">
        <div className="logo"><img src={logo} alt="로고" /></div>
        <p>{content}</p>
      </div>
      </Box>
    </ModalBox>
    </>
  );
};

export default CompleteModal;