import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";
import { margin } from "@mui/system";

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1.8s ease-in-out;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
`;
const Detail = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid yellow;
`;

const SelectBox = styled.div`
  width: 90%;
  min-width: 400px;
  height: 80px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;
const SelectButton = styled.button`
  width: 8%;
  min-width: 50px;
  height: 50px;
  letter-spacing: -1px;
  background-color: white;
  border: 0;
  color: #7D5A5A;
  cursor: pointer;
`;
const DatePick = styled.div`
  min-width: 100px;
  margin-left: auto;
  margin-right: 1%;
  padding-left: 1%;
  padding-right: 1%;
  border: 1px solid #F3E1E1;
  border-radius: 10px;
`;
const DateSelected = styled.p`
  cursor: pointer;
`;

const ContentBox = styled.div`
  width: 90%;
  min-width: 400px;
  height: 780px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const ContentTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;
const ContentType = styled.p`

`;
const ContentDetial = styled.div`

`;
const ContentLists = styled.p`
  display: flex;
`;


const MyReview = () => {
  const [loaded, setLoaded] = useState(false);
  // 날짜 선택 state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [reviewInfo, setReviewInfo] = useState([]);

  const handleDateChange = (date) => {
    setStartDate(date[0]);
    setEndDate(date[1]);
    // startDate와 endDate가 설정되면 DatePicker를 숨김
    if (date[0] && date[1]) {
      setShowDatePicker(false);
      setShowDate(true);
    }
  };

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
    setShowDate(!showDate);
  };

  // 리뷰 데이터 받기 - 테스트 수정 예정
  const data =[
    {
        "reviewNum": 1,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-20T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 2,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트2",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-11T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 3,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트3",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-12T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 4,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트4",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-13T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 5,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트5",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-14T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 6,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트6",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-15T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 7,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트7",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-16T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 8,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트8",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-17T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 9,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트9",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-18T15:30:00",
        "likeCount": 10,
        "score": 4.5
    },
    {
        "reviewNum": 10,
        "userNum": 10000001,
        "cafeNum": 10001,
        "reviewContent": "첫 리뷰 테스트10",
        "reviewImgUrl1": "url1",
        "reviewImgUrl2": "url2",
        "writtenTime": "2023-06-19T15:30:00",
        "likeCount": 10,
        "score": 4.5
    }
];
useEffect(() => {
  setReviewInfo(data);
}, []);
/*  useEffect(() => {
    const getReviewInfo = async () => {
      const rsp = await AxiosApi.reviewGet(10000001);
      if (rsp.status === 200) setReviewInfo(rsp.data);
    };
    getReviewInfo();
  }, []); */

  // 화면 전환 효과
  useEffect(() => {
    const styleTags = Array.from(
      document.querySelectorAll('style[data-styled="true"]')
    );

    const showStyleTags = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        const currentTag = styleTags[currentIndex];

        if (currentTag) {
          currentTag.setAttribute("data-loaded", "true");
          currentIndex++;
        
          if (currentIndex >= styleTags.length) {
            clearInterval(interval);
            setLoaded(true);
          }
        } else {
          clearInterval(interval);
          setLoaded(true);
        }
        
      }, 200); // 각 스타일 태그가 표시되는 시간 간격 (200ms)
    };
    showStyleTags();
  }, []);

  // 최초 날짜 오늘로 설정
  useEffect(() => {
    const today = new Date(); // 현재 날짜
    setStartDate(today);
    setEndDate(today);
  }, []);

  return (
    <OutBox>
      <Header />
      <Container loaded={loaded}>
        <SideMenu />
        <Detail>
          <SelectBox>
            <SelectButton>전체</SelectButton>
            <SelectButton>일주일</SelectButton>
            <SelectButton>한 달</SelectButton>
            <SelectButton>일 년</SelectButton>
            <DatePick>            
            {showDate && (<DateSelected onClick={handleButtonClick}>
              {startDate && endDate ? 
              `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
              : 'Show DatePicker'}
            </DateSelected>)}
              {showDatePicker && (
                <DatePicker
                  selected={startDate}
                  onChange={handleDateChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              )}
            </DatePick>
          </SelectBox>
          <ContentBox>
            <ContentTop>
              <ContentType>번호</ContentType>
              <ContentType>제목</ContentType>
              <ContentType>카페</ContentType>
              <ContentType>날짜</ContentType>
            </ContentTop>
            <hr style={{margin: '1%'}} />
            <ContentDetial>
              {reviewInfo.map((item, index) => (
                <ContentLists key={index}>
                  <p>{item.reviewNum}</p>
                  <p>{item.cafeNum}</p>
                  <p>{item.reviewContent}</p>
                  <p>{item.writtenTime}</p>
                </ContentLists>
              ))}
            </ContentDetial>
          </ContentBox>
        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>
  );
};
export default MyReview;