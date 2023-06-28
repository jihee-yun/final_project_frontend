import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Roulette from "./Roulette";
import quiz from "./images/quiz.png";
import shopping from "./images/shopping.png";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./Api/AxiosApi";
import QuizModal from "./QuizModal";

const ContainerBox = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
`;

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ChallengeBox = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 200px;
  height: 300px;
  display: inline-block;
  margin-right: 50px; 
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const EventFooter = styled.div`
 
 .event-box{
  display: flex;
  flex-direction: row;
 }
`;

const QuizBox = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 50px;

  img {
    width: 80px;
    height: 80px;
    margin: 20px 0 10px 20px;
  }
  
  h3 {
    margin-left: 20px;
    line-height: 10%;
  }

  p {
    margin-left: 20px;
    color: gray;
    font-size: 1rem;
  }

  .quizButton{
    width: 50%;
    height: 50px;
    margin: 0 auto;
  }
  button {
    margin-top: 25px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #7D5A5A;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const AdBox = styled.div`
  width: 280px;
  height: 280px;
  border: 1px solid black;
  margin: 50px;
`;

const LuckyBox = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 50px;

  img {
    width: 80px;
    height: 80px;
    margin: 20px 0 10px 20px;
  }
  
  h3 {
    margin-left: 20px;
    line-height: 10%;
  }

  p {
    margin-left: 20px;
    color: gray;
    font-size: 1rem;
  }

  .shoppingButton{
    width: 50%;
    height: 50px;
    margin: 0 auto;
  }
  button {
    margin-top: 25px;
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #7D5A5A;
    font-size: 1.1rem;
    font-weight: bolder;
    cursor: pointer;
  }
`;

const ChallengeTitle = styled.div`
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 1.1rem;
  margin-top: 240px;
`;

const Thumb = styled.div`

  border: 1px solid black;
  width: 100%;
  height: 100%;
  object-fit: fit;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
 
`;

const Event = () => {
  const navigate = useNavigate();
  const [challengeInfo, setChallengeInfo] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const challengeInfo = async() => {
      const rsp = await AxiosApi.challengeGet("ALL");
      if(rsp.status === 200) setChallengeInfo(rsp.data);
    };
    challengeInfo();
  }, []);

  console.log(challengeInfo);

  const navigateCh = () => {
    navigate('/challengeMain');
  };

  const navigatePoint = () => {
    navigate('/couponStore');
  };

  return(
    <>
      <ContainerBox>
        <Box>
          <h3>이 달의 챌린지</h3>
          <ChallengeBox onClick={navigateCh}>
            {challengeInfo && challengeInfo.map(item => (
              <ChallengeTitle key={item.challengeName} onClick={() => setChallengeInfo(item.challengeName)}>
                <Title>{item.challengeName}</Title>
                <Thumb className="img" imageurl={item.thumbnail}></Thumb>
              </ChallengeTitle>
            ))}
          </ChallengeBox>
          {/* <ChallengeBox onClick={navigateCh}>
          </ChallengeBox>
          <ChallengeBox onClick={navigateCh}>
          </ChallengeBox>
          <ChallengeBox onClick={navigateCh}>
          </ChallengeBox> */}
          <Roulette />
          <EventFooter>
            <div className="event-box">
              <QuizBox>
                <div>
                  <img src={quiz} alt="퀴즈" />
                  <h3 className="quizTitle">깜짝 퀴즈</h3>
                  <p>퀴즈 풀고 포인트 받기</p>
                  <div className="quizButton">
                    <button onClick={openModal}>퀴즈 풀기</button>
                    <QuizModal type={true} open={modalOpen} close={closeModal}>커피 퀴즈 어쩌구 저쩌구</QuizModal>
                  </div>
                </div>
              </QuizBox>
              <AdBox>
                <div><p>광고 이미지</p></div>
              </AdBox>
              <LuckyBox>
                <div>
                <img src={shopping} alt="퀴즈" />
                  <h3 className="shoppingTitle">포인트샵</h3>
                  <p>쌓인 포인트로 구매하세요!</p>
                  <div className="shoppingButton">
                  <button onClick={navigatePoint}>바로 가기</button>
                  </div>
                </div>
            </LuckyBox>
            </div>
          </EventFooter>
        </Box>
      </ContainerBox>
    </>
  );
};

export default Event;