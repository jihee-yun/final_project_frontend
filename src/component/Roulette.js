import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import start from "../images/start.png"
import pin from "../images/pin.png"
import roulettePan from "../images/roulettePan.png";
import celebration1 from "../images/celebration1.png";
import celebration2 from "../images/celebration2.png";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import { useNavigate } from "react-router-dom";


const Container = styled.h3`
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
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

  animation: ${rotateAnimation} 1.5s infinite linear;
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

  .celebrate1 {
    position: absolute;
    top: 10px;
    left: 70px;
    width: 50px;
    height: 50px;
  }

  .celebrate2 {
    position: absolute;
    top: 10px;
    width: 50px;
    height: 50px;
  }
  
`;


const Roulette = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { isLogin } = context;
  const [isSpinning, setIsSpinning] = useState(false);
  const [winning, setWinning] = useState(0);
  const [canSpin, setCanSpin] = useState(true);
  const {userNum} = context;
  let amount = 0;


  const handleStartClick = async() => {
    if (!isLogin) {
      navigate('/memberlogin');
      return;
    }

    const rspHistory = await AxiosApi.rouletteHistory(userNum);

    if (rspHistory.data === true) {
      alert('룰렛은 하루에 한번만 돌릴 수 있어요!');
      return;
    } else {
      const rspSpin = await AxiosApi.rouletteSpin(userNum);
      console.log(rspSpin);
      setIsSpinning(true); // 회전 시작
      setCanSpin(false)
    
      const stopTime = Math.floor(Math.random() * 4) + 3; // 3 ~ 6초 사이 정수값 랜덤으로 멈춤
    
      setTimeout(async() => {
        setIsSpinning(false);
        showWinning(stopTime); // 당첨 금액 보여줌
        AxiosApi.pointGet(userNum, amount, "roulette");
      }, stopTime * 1000); // 랜덤 멈추기
    }
  };

  // useEffect(() => {
  //   checkSpin();
  // }, []);

  // const checkSpin = async() => {
  //   const rsp = await AxiosApi.rouletteSpin(userNum);
  //   console.log(rsp.data);
  //   setHasSpunToday(rsp.data.spunToday);

  //   const rspHistory = await AxiosApi.rouletteHistory(userNum, hasSpunToday);
  //   if(rspHistory.data.length === 0) {
  //     setHasSpunToday(false);
  //   } else {
  //     setHasSpunToday(true);
  //   }
  // };

  const showWinning = (stopTime) => {
    if (stopTime === 3) {
      amount = 50;
    } else if (stopTime === 4) {
      amount = 100;
    } else if (stopTime === 5) {
      amount = 30;
    } else if (stopTime === 6) {
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
      <WinBox show={winning !== 0}>
        <div>
          {winning !== 0 && (
            <p className="win-p">
              <img className="celebrate1" src={celebration1} alt="왼쪽컨페티" />
              당첨 금액 : {winning}원 
              <img className="celebrate2" src={celebration2} alt="오른쪽컨페티" />
            </p>
          )}
        </div>
      </WinBox>
    </Container>
    </>
  );
};

export default Roulette;
