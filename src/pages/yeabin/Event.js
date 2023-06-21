import React from "react";
import styled from "styled-components";
import Roulette from "./Roulette";

const ContainerBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Box = styled.h3`
  width: 80%;
  margin: 0 auto;
`;

const ChallengeBox = styled.div`
  /* background-color: #FFCFDA; */
  border: 1px solid #FFCFDA;
  margin-top: 50px;
  width: 200px;
  height: 300px;
  display: inline-block;
  margin-right: 50px; 
`;

const QuizBox = styled.div`
  h3{
    
  }
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
            <h3>퀴즈</h3>
          </QuizBox>
        </Box>
      </ContainerBox>
    </>
  );
};

export default Event;