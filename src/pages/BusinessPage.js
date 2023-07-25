import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";
import Header from "../component/Header";
import Footer from "../component/Footer";
import SideMenuForBusiness from "../component/SideMenuForBusiness";
import ChatBot from "../component/ChatBot";

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
`;
// 세부 페이지
const Detail = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  min-height: 600px;
  display: flex;
  /* border: 2px solid yellow; */
  flex-wrap: wrap;
  justify-content: space-around;
`;

// 각 메뉴별 외부 박스
const SquareBox = styled.div`
  width: 30%;
  min-width: 220px;
  height: 300px;
  margin-top: 2%;
  margin-bottom: -2%;
  border: 2px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    width: calc(45% - 20px); // 2개를 한 줄에 배치
  }

  @media (max-width: 768px) {
    width: calc(90% - 20px); // 1개를 한 줄에 배치
  }
`;
// 세부 메뉴 이름 + 더보기 버튼
const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
// 세뮤 메뉴 이름
const Title = styled.p`
  height: 20px;
  letter-spacing: -1px;
  margin-left: 2%;
`;
// 더보기 버튼
const More = styled.p`
  height: 20px;
  letter-spacing: -1px;
  margin-left: auto;
  margin-right: 2%;
  cursor: pointer;
`;
// 세부 내용 목록
const BoxContent = styled.div`
  width: 90%;
  height: 75%;
  border: 1px solid blue;
`;



const BusinessPage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState([]);

  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);

  // 유저 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await AxiosApi.getMemberInfo(userNum, grantType, accessToken);
        if (rsp.status) {
          setMemberInfo(rsp.data[0]);
          console.log("마이페이지 유저 정보 가져오기 성공: ", rsp.data[0])
        }
      } catch (error) {
        console.log("마이페이지 유저 정보 가져오기 실패: ", error);
      }
    };
    fetchMemberInfo();
  }, [userNum]);



  return(
    <OutBox>
    <Header />
    <Container>
      <SideMenuForBusiness />
      <Detail>
        <SquareBox>
          <BoxTitle>
            <Title>리뷰 관리</Title>
            <More onClick={()=>navigate("/businesspage/review")}>더 보기</More>
          </BoxTitle>
          <BoxContent></BoxContent>
        </SquareBox>
        <SquareBox>
          <BoxTitle>
            <Title>카페 챌린지</Title>
            <More onClick={()=>navigate("/businesspage/challenge")}>더 보기</More>
          </BoxTitle>
          <BoxContent></BoxContent>
        </SquareBox>
        <SquareBox>
          <BoxTitle>
            <Title>참여 이벤트</Title>
            <More onClick={()=>navigate("/businesspage/event")}>더 보기</More>
          </BoxTitle>
          <BoxContent></BoxContent>
        </SquareBox>
        <SquareBox>
          <BoxTitle>
            <Title>결제/포인트</Title>
            <More onClick={()=>navigate("/businesspage/point")}>더 보기</More>
          </BoxTitle>
          <BoxContent></BoxContent>
        </SquareBox>
        <SquareBox>
          <BoxTitle>
            <Title>문의/신고</Title>
            <More onClick={()=>navigate("/businesspage/report")}>더 보기</More>
          </BoxTitle>
          <BoxContent></BoxContent>
        </SquareBox>
      </Detail>
    </Container>
    <Footer />
    <ChatBot />
    </OutBox>
  );
};
export default BusinessPage;