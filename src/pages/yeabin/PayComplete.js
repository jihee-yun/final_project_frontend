import React from 'react';
import styled from "styled-components";
import credit from "./images/credit.png";


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  img {
    width: 150px;
    height: 150px;
  }

  p {
    margin-top: 30px;
    font-size: 1.5rem;
    font-weight: bolder;
  }
`;

const PayComplete = () => {
  return(
    <Container>
      <div className='pay'>
        <img src={credit} alt="결제" />
        <p>결제가 완료되었습니다.</p>
      </div>
    </Container>
  );
};

export default PayComplete;