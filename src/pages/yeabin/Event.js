import React from "react";
import styled from "styled-components";
import Roulette from "./Roulette";
import quiz from "./images/quiz.png"

const ContainerBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ChallengeBox = styled.div`
  /* background-color: #FFCFDA; */
  margin-top: 50px;
  width: 200px;
  height: 300px;
  display: inline-block;
  margin-right: 50px; 
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
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
`;

const Event = () => {
  return(
    <>
      <ContainerBox>
        <Box>
          <h3>이 달의 챌린지</h3>
          <ChallengeBox>
            <div>
            </div>
          </ChallengeBox>
          <ChallengeBox>
            <div>
            </div>
          </ChallengeBox>
          <ChallengeBox>
            <div>
            </div>
          </ChallengeBox>
          <ChallengeBox>
            <div>
            </div>
          </ChallengeBox>
          <Roulette />
          <QuizBox>
            <div>
              <img src={quiz} alt="퀴즈" />
              <h3 className="quizTitle">깜짝 퀴즈</h3>
              <p>퀴즈 풀고 포인트 받기</p>
              <div className="quizButton">
              <button>퀴즈 풀기</button>
              </div>
            </div>
          </QuizBox>
          <AdBox>
            <div><p>광고 이미지</p></div>
          </AdBox>
          <LuckyBox>
            <div>
              
            </div>
          </LuckyBox>
        </Box>
      </ContainerBox>
    </>
  );
};

export default Event;