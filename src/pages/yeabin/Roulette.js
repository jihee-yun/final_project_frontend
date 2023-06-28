import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import start from "./images/start.png"
import pin from "./images/pin.png"
import roulettePan from "./images/roulettePan.png";


const Container = styled.h3`
  position: relative;
  margin-top: 100px;
  margin-bottom: 80px;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
;

const OuterBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 510px;
  height: 510px;
  margin-left: auto;
  margin-right: auto;

  img {
    z-index: 2;
  }

  .roulette {
    position: absolute;
    top: -90px;
    left: 0;
    right: 0;
    bottom: 0;
    /* border-radius: 50%;
    border: 3px solid black; */
  }

  animation: ${rotateAnimation} 2s infinite linear;
  animation-play-state: ${({ isspinning }) => (isspinning ? "running" : "paused")};
`;


const Pin = styled.div`
  position: absolute;
  top: 0;
  left: 48%;
  z-index: 1;
`;

const Start = styled.div`
  position: relative;
  top: 59%;
  left: 89%;
  transform: translate(-50%, -50%);
  z-index: 1;
  img {
    width: 100px;
    height: 100px;
  }
  cursor: pointer;
`;

const Pan = styled.div`
  position: absolute;
`;

const WinBox = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  margin-top: 40px;
  font-size: 1.4rem;
  border: 4px solid #FFCFDA;
  border-radius: 40px;
  width: 400px;
  display: ${({ show }) => (show ? "block" : "none")};

  .win-p {
    text-align: center;
  }
  
`;


const Roulette = () => {
  const [isSpinning, setIsSpinning] = useState(false); 
  const [winning, setWinning] = useState(null);

  const handleStartClick = () => {
    setIsSpinning(true); // 회전 시작
  
    const stopTime = Math.floor(Math.random() * 4) + 3; // 3 ~ 6초 사이 정수값 랜덤으로 멈춤
  
    setTimeout(() => {
      setIsSpinning(false);
      showWinning(stopTime); // 당첨 금액 보여줌
    }, stopTime * 1000); // 랜덤 멈추기
  };

  const showWinning = (stopTime) => {
    let amount = null;
    if (stopTime === 3 || stopTime === 5) {
      amount = 50;
    } else if (stopTime === 4 || stopTime === 6) {
      amount = 500;
    }

    setWinning(amount);
  };
   
  

  return(
    <>
    <Container>
      <Pin>
        <div><img src={pin} alt="룰렛핀" /></div>
      </Pin>
      <OuterBox isspinning={isSpinning}>
        <div className="roulette">
          <Start onClick={handleStartClick}>
            <div><img src={start} alt="시작버튼" /></div>
          </Start>
          <Pan>
            <div><img src={roulettePan} alt="룰렛판" /></div>
          </Pan>
        </div>
      </OuterBox>
      <WinBox show={winning !== null}>
        <div>
          {winning !== null && (
            <p className="win-p">당첨 금액 : {winning}원</p>
          )}
        </div>
      </WinBox>
    </Container>
    </>
  );
};

export default Roulette;