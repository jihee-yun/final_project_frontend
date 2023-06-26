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




const Roulette = () => {
  const [isSpinning, setIsSpinning] = useState(false); 

  const handleStartClick = () => {
    setIsSpinning(true); // 회전 시작

    setTimeout(() => {
      setIsSpinning(false);
    }, 3000); // 3초 뒤 멈춤
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

      {/* {selectItem && <p>당첨 : {selectItem}</p>} */}
      {/* <ul>
        {itmes.map()}
      </ul> */}
    </Container>
    </>
  );
};

export default Roulette;