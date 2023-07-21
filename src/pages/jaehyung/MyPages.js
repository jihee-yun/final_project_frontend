import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MemberApi from "./api/MemberApi";
import AxiosApi from "./api/AxiosApi";
import { UserContext } from "../../context/UserStore";
import Header from "../now/component/Header";
import Footer from "../now/component/Footer";
import SideMenu from "./components/SideMenu";
import ChatBot from "./components/ChatBot";

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

// 가로 정렬 박스
// const LineBox = styled.div`
//   width: 100%;
//   height: 300px;
//   /* border: 1px solid black; */
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 3%;
//   margin-bottom: -1%;
// `;
// 각 메뉴별 외부 박스
const SquareBox = styled.div`
  width: 25%;
  min-width: 220px;
  height: 250px;
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
// 캘린더용 외부 박스
// const LongBox = styled.div`
//   width: 55%;
//   height: 98%;
//   border: 2px solid #F3E1E1;
//   margin-right: 5%;
//   border-radius: 15px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
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
// const BoxContentLong = styled.div`
//   width: 90%;
//   height: 75%;
//   border: 1px solid blue;
// `;



const MyPage = () => {
  const navigate = useNavigate();

  const [memberInfo, setMemberInfo] = useState([]);

  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);

  // 유저 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await MemberApi.getMemberInfo(userNum, grantType, accessToken);
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
      <SideMenu />
      <Detail>
        {/* <LineBox> */}
          <SquareBox>
            <BoxTitle>
              <Title>작성 리뷰</Title>
              <More onClick={()=>navigate("/mypage/review")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
          <SquareBox>
            <BoxTitle>
              <Title>참여 챌린지</Title>
              <More onClick={()=>navigate("/mypage/challenge")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
          <SquareBox>
            <BoxTitle>
              <Title>참여 길드</Title>
              <More onClick={()=>navigate("/mypage/somoim")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
        {/* </LineBox> */}
        {/* <LineBox> */}
          <SquareBox>
            <BoxTitle>
              <Title>참여 이벤트</Title>
              <More onClick={()=>navigate("/mypage/event")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
          <SquareBox>
            <BoxTitle>
              <Title>결제/포인트</Title>
              <More onClick={()=>navigate("/mypage/point")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
          <SquareBox>
            <BoxTitle>
              <Title>문의/신고</Title>
              <More onClick={()=>navigate("/mypage/report")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
        {/* </LineBox> */}
        {/* <LineBox>
          <LongBox>
            <BoxTitle>
              <Title>캘린더</Title>
              <More onClick={()=>navigate("/mypage/calendar")}>더 보기</More>
            </BoxTitle>
            <BoxContentLong></BoxContentLong>
          </LongBox>
          <SquareBox>
            <BoxTitle>
              <Title>랭킹</Title>
              <More onClick={()=>navigate("/mypage/ranking")}>더 보기</More>
            </BoxTitle>
            <BoxContent></BoxContent>
          </SquareBox>
        </LineBox> */}
      </Detail>
    </Container>
    <Footer />
    <ChatBot />
    </OutBox>
  );
};
export default MyPage;