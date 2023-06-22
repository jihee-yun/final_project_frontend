import React from "react";
import styled from "styled-components";
// import challengePin from "./images/challengePin.png"

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  /* img {
    width: 100%;
    height: 500px;
    background-size: cover;
  } */
`;

const Box = styled.div`
  width: 80%;
  margin: 0 auto;

  h3 {
    font-weight: bolder;
    width: 300px;
  }

`;

const ChBox = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  .ch_box1 {
    width: auto;
    height: 550px;
    margin: 30px;

    .title {
      font-size: 1.3rem;
      font-weight: bolder;
      border-radius: 20px;
      text-align: center;
      margin-bottom: 40px;
    }

    .step {
      font-size: 1.2rem;
      font-weight: bolder;
      color: #FFCFDA;
      text-align: center;
    }

    .content {
      font-size: 1.1rem;
      font-weight: bolder;
      border: 3px solid #FFCFDA;
      width: 400px;
      height: 70px;
      border-radius: 40px;
      margin: 0 auto;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
  }
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
    border: none;
    width: 400px;
    height: 50px;
    border-radius: 20px;
    background-color: #FFCFDA;
    margin-top: 100px;
    margin-bottom: 60px;
    font-size: 1.2rem;
    font-weight: bolder;
    color: white;
    cursor: pointer;
  }
`;

const Confirm = styled.div`
  margin-top: 150px;

  .title {
    font-size: 1.3rem;
    font-weight: bolder;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 40px;
  }

  .content {
    width: 400px;
    height: 100px;
    font-size: 1.1rem;
    font-weight: bolder;
    /* background-color: #FFCFDA; */
    border: 3px solid #FFCFDA;
    border-radius: 20px;
    margin: 0 auto;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
`;

const ChallengeMain = () => {
  return(
    <>
    <Container>
      {/* <div><img src={chImg1} alt="전체" /></div> */}
      <Box>
        <div>
          
          {/* <img src={challengePin} alt="핀" /> */}
          <h3>제휴 카페 5개 방문하기 챌린지</h3>
          <ChBox>
          <div className="ch_box1">
            <p className="title">참여 방법</p>
            <p className="step">STEP 1</p>
            <p className="content">챌린지를 신청한다.</p>
            <p className="step">STEP 2</p>
            <p className="content">스위트킹덤 제휴 카페를 확인한다.</p>
            <p className="step">STEP 3</p>
            <p className="content">해당하는 카페에 방문한다.</p>
            <p className="step">STEP 4</p>
            <p className="content">인증 방법에 따라 인증한다.</p>
          </div>
          </ChBox>
          <Confirm>
            <div className="ch_box2">
              <p className="title">챌린지 인증</p>
              <div className="content">
                <p>카페 직원에게 고유 바코드를 보여주세요.</p>
                <p>직원이 바코드를 찍으면 완료!</p>
              </div>
            </div>
          </Confirm>
          <Btn>
            <div>
              <button>오늘부터 시작하기</button>
            </div>
          </Btn>
        </div>
      </Box>
      
    </Container>
    </>
  );
};

export default ChallengeMain;