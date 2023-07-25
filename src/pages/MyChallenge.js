import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideMenu from "../component/SideMenu";
import ChatBot from "../component/ChatBot";

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 사이드 메뉴 + 세부 페이지
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
// 세부 페이지
const Detail = styled.div`
  width: 100%;
  max-width: 1000px;
  /* height: 1000px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* border: 2px solid yellow; */
`;

// 세부 페이지 윗쪽 부분
const SelectBox = styled.div`
  width: 90%;
  min-width: 300px;
  height: 80px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TextBox = styled.p`
  margin-left: 10px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
// 세부 페이지 중앙 부분
const ContentBox = styled.div`
  width: 90%;
  min-width: 300px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
// 세부 페이지 가로 박스
const ContentRowbox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
// 세부 정보들 나열해주는 박스
const SpecificBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
  min-width: 200px;
  max-width: 300px;
  border: 1px solid #F3E1E1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  @media (max-width: 500px) {
    width: calc(80% - 20px); // 1개를 한 줄에 배치
  }
`;
// 그냥 가로 박스
const RowBox = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
`;
// 챌린지 이름
const ChallengeName = styled.p`

`;
// 더보기 버튼
const More = styled.p`
  font-size: .6em;
  height: 10px;
  letter-spacing: -1px;
  margin-left: auto;
  margin-right: 1%;
  cursor: pointer;
`;
// 챌린지 카운트
const CahllengeCount = styled.p`
  margin-right: auto; 
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 챌린지 내용
const ChallengeDetail = styled.p`
  margin-right: auto;
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 챌린지 만료 날짜
const ChallengeExpired = styled.p`
  margin-right: auto;
  margin-left: 5%;
`;


const MyChallenge = () => {
  const navigate = useNavigate();
  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);
  // 유저 정보 상태 관리
  const [memberInfo, setMemberInfo] = useState(null);

  // 페이지 랜더링시 유저 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await AxiosApi.getMemberChallengeInfo(userNum, grantType, accessToken);
        if (rsp.status) {
          setMemberInfo(rsp.data[0]);
          console.log("유저 정보 가져오기 성공: ", rsp.data[0])
        }
      } catch (error) {
        console.log("유저 정보 가져오기 실패: ", error);
      }
    };
    fetchMemberInfo();
  }, [userNum]);








  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <SelectBox>
            <TextBox>참여중인 챌린지 조회</TextBox>
          </SelectBox>
          <ContentBox>
            <ContentRowbox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
            </ContentRowbox>
            <ContentRowbox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
            </ContentRowbox>
            <ContentRowbox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
              <SpecificBox>
                <RowBox>
                  <ChallengeName>챌린지 이름1</ChallengeName>
                  <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
                </RowBox>
                <CahllengeCount>카운트: 5</CahllengeCount>
                <ChallengeDetail>내용: 1식1케이크 도전</ChallengeDetail>
                <ChallengeExpired>만료날짜: 2023-07</ChallengeExpired>
              </SpecificBox>
            </ContentRowbox>
          </ContentBox>
        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>
  );
};
export default MyChallenge;