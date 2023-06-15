import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Box = styled.h3`
  width: 80%;
  margin: 0 auto;
`;

const ChallengeBox = styled.div`
  border: 1px solid black; // 나중에 지우기
  margin-top: 50px;
  width: 200px;
  height: 300px;
`;

const Event = () => {
  return(
    <>
      <ContainerBox>
        <Box>
          <h3>이 달의 챌린지</h3>
          <ChallengeBox>
            <div>
              <p>챌린지 소개</p>
            </div>
          </ChallengeBox>
        </Box>
      </ContainerBox>
    </>
  );
};

export default Event;