import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import { storage } from "../../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import Header from "../../now/component/Header";
import Footer from "../../now/component/Footer";
import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";

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
`;
// 세부 페이지 중앙 부분
const ContentBox = styled.div`
  width: 90%;
  min-width: 500px;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;
// 세부 정보들 나열해주는 박스
const SpecificBox = styled.div`
  margin: 20px;
  width: 40%;
  min-width: 200px;
  border: 1px solid #F3E1E1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
// 길드 이미지(썸네일)
const GuildImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`;
// 그냥 가로 박스
const RowBox = styled.div`
  width: 90%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: -10px;
`;
// 길드 이름
const GuildName = styled.p`

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
// 길드 카테고리
const GuildCategory = styled.p`
  margin-right: auto; 
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 길드 지역
const GuildRegion = styled.p`
  margin-right: auto;
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 길드 인원수
const GuildMemberNum = styled.p`
  margin-right: auto;
  margin-bottom: -5px;
  margin-left: 5%;
`;
// 길드 소개
const GuildIntro = styled.p`
  margin-right: auto;
  margin-left: 5%;
`;

const MyGuild = () => {
  const navigate = useNavigate();
  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);
  // 유저 정보 상태 관리
  const [memberInfo, setMemberInfo] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // 유저 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await AxiosApi.getMemberGuildInfo(userNum, grantType, accessToken);
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

    // 파이어베이스 스토리지 이미지 로딩
    useEffect(() => {
      const storageIconRef = ref(storage, "images");
  
      Promise.all([
        getDownloadURL(ref(storageIconRef, "cake.jpeg")),
      ])
        .then((urls) => {
          setImageUrls(urls);
          // console.log(imageUrls);
        })
        .catch((error) => {
          console.error("아이콘 이미지 로딩 실패!!", error);
        });
    }, []);



  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <SelectBox>
            <TextBox>참여중인 길드 조회</TextBox>
          </SelectBox>
          <ContentBox>
            <ContentRowbox>
              <SpecificBox>
                <GuildImg src={imageUrls[0]} alt="GuildImg"></GuildImg>
                <RowBox>
                  <GuildName>길드 이름1</GuildName>
                  <More onClick={()=>navigate("/mypage/guild")}>자세히 보기</More>
                </RowBox>
                <GuildCategory>카테고리: 친목</GuildCategory>
                <GuildRegion>지역: 서울특별시 강남구</GuildRegion>
                <GuildMemberNum>인원수: 20</GuildMemberNum>
                <GuildIntro>소개: 슈르릅 옴뇸뇸</GuildIntro>  
              </SpecificBox>
              <SpecificBox>
                <GuildImg src={imageUrls[0]} alt="GuildImg"></GuildImg>
                <RowBox>
                  <GuildName>길드 이름1</GuildName>
                  <More onClick={()=>navigate("/mypage/guild")}>자세히 보기</More>
                </RowBox>
                <GuildCategory>카테고리: 친목</GuildCategory>
                <GuildRegion>지역: 서울특별시 강남구</GuildRegion>
                <GuildMemberNum>인원수: 20</GuildMemberNum>
                <GuildIntro>소개: 슈르릅 옴뇸뇸</GuildIntro>  
              </SpecificBox>
            </ContentRowbox>
            <ContentRowbox>
              <SpecificBox>
                <GuildImg src={imageUrls[0]} alt="GuildImg"></GuildImg>
                <RowBox>
                  <GuildName>길드 이름1</GuildName>
                  <More onClick={()=>navigate("/mypage/guild")}>자세히 보기</More>
                </RowBox>
                <GuildCategory>카테고리: 친목</GuildCategory>
                <GuildRegion>지역: 서울특별시 강남구</GuildRegion>
                <GuildMemberNum>인원수: 20</GuildMemberNum>
                <GuildIntro>소개: 슈르릅 옴뇸뇸</GuildIntro>  
              </SpecificBox>
              <SpecificBox>
                <GuildImg src={imageUrls[0]} alt="GuildImg"></GuildImg>
                <RowBox>
                  <GuildName>길드 이름1</GuildName>
                  <More onClick={()=>navigate("/mypage/guild")}>자세히 보기</More>
                </RowBox>
                <GuildCategory>카테고리: 친목</GuildCategory>
                <GuildRegion>지역: 서울특별시 강남구</GuildRegion>
                <GuildMemberNum>인원수: 20</GuildMemberNum>
                <GuildIntro>소개: 슈르릅 옴뇸뇸</GuildIntro>  
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
export default MyGuild;