import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import start from "./images/start.png"
import pin from "./images/pin.png"

const Container = styled.h3`
  /* width: 80%;
  margin: 0 auto; */
  position: relative;
  margin-top: 80px;

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
  width: 500px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;

  .roulette {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 3px solid black;
  }

  animation: ${rotateAnimation} 2s infinite linear;
  animation-play-state: ${({ isspinning }) => (isspinning ? "running" : "paused")};
`;


const Pin = styled.div`
  position: absolute;
  top: -10px;
  left: 48%;
  z-index: 1;
`;

const Start = styled.div`
  position: relative;
  top: 49%;
  left: 90%;
  transform: translate(-50%, -50%);
  z-index: 2;
  img {
    width: 100px;
    height: 100px;
  }
`;

const ItemBox = styled.div`
  .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 10%;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bolder;

  }
  .item:nth-child(1) {
    transform: rotate(0deg);
  }
  .item:nth-child(2) {
    transform: rotate(90deg);
  }
  .item:nth-child(3) {
    transform: rotate(180deg);
  }
  .item:nth-child(4) {
    transform: rotate(270deg);
  }
`;

const LineBox = styled.div`
  .line {
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 50%;
    width: 3px;
    background-color: black;
    transform-origin: bottom;
  }

  .line:nth-child(1) {
    transform: rotate(45deg);
  }
  .line:nth-child(2) {
    transform: rotate(135deg);
  }
  .line:nth-child(3) {
    transform: rotate(225deg);
  }
  .line:nth-child(4) {
    transform: rotate(315deg);
  }
`;

const Roulette = () => {
  const [isSpinning, setIsSpinning] = useState(false); // 회전 상태를 저장하는 상태 변수

  const handleStartClick = () => {
    setIsSpinning(true); // 회전 시작

    setTimeout(() => {
      setIsSpinning(false);
    }, 3000); // 3초 뒤 멈춤
  };

  // const [selectItem, setSelectItem] = useState(null);
  // const itmes = ['1', '2', '3', '4', '5'];

  // const spinRoulette = () => {
  //   const random = Math.floor(Math.random() * itmes.length);
  //   setSelectItem(itmes[random]); 
  // };

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
          <ItemBox>
            <div className="item">500원</div>
            <div className="item">100원</div>
            <div className="item">50원</div>
            <div className="item">30원</div>
          </ItemBox>
          <LineBox>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </LineBox>
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