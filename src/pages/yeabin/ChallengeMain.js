import React from "react";
import styled from "styled-components";
// import challengePin from "./images/challengePin.png"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  /* img {
    display: flex;
    width: 40px;
    height: 40px;
  } */
 
  h3 {
    display: flex;
    font-weight: bolder;
    margin-left: 10px;
    width: 300px;
  }
`;

const ChallengeMain = () => {
  return(
    <>
    <Container>
      <Title>
        <div>
          {/* <img src={challengePin} alt="핀" /> */}
          <h3>제휴 카페 5개 방문하기 챌린지</h3>
        </div>
      </Title>
      
    </Container>
    </>
  );
};

export default ChallengeMain;