import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";

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
  border: 1px solid #f3e1e1;
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
  color: #7d5a5a;
  cursor: pointer;
`;
const DatePick = styled.div`
  min-width: 100px;
  margin-left: auto;
  margin-right: 1%;
  padding-left: 1%;
  padding-right: 1%;
  border: 1px solid #f3e1e1;
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
  border: 1px solid #f3e1e1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const ContentTop = styled.div`
  height: 50px;
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: -1%;
`;
const ContentNum = styled.p`
  width: 10%;
  min-width: 70px;
  margin-left: 1%;
  text-align: center;
`;
const ContentTitle = styled.p`
  width: 60%;
  min-width: 300px;
  margin-left: 2%;
  text-align: center;
`;
const ContentCafe = styled.p`
  width: 10%;
  min-width: 100px;
  margin-left: 2%;
  text-align: center;
`;
const ContentDate = styled.p`
  width: 10%;
  margin-left: 2%;
  text-align: center;
`;
const ContentDetail = styled.div`
  min-height: 600px;
  border: 1px solid blue;
`;
const ContentLists = styled.p`
  display: flex;
  border-bottom: 1px solid #f3e1e1;
  margin-top: -1%;
  margin-left: 1%;
  margin-right: 1%;
  cursor: pointer;
`;
const ListNum = styled.p`
  width: 10%;
  min-width: 70px;
  margin-left: 1%;
  text-align: center;
`;
const ListTitle = styled.p`
  width: 60%;
  min-width: 300px;
  margin-left: 2%;
  text-align: center;
  cursor: pointer;
`;
const ListCafe = styled.p`
  width: 10%;
  min-width: 100px;
  margin-left: 2%;
  text-align: center;
`;
const ListDate = styled.p`
  width: 10%;
  margin-left: 2%;
  text-align: center;
`;

const NumberSelectBox = styled.div`
  height: 30px;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-right: 2%;
  cursor: pointer;
`;
const RightButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-left: 2%;
  cursor: pointer;
`;
const PageNumber = styled.p`
  margin-left: 1%;
  cursor: pointer;
  color: #7D5A5A;
  ${({ active }) =>
    active &&
    `
    font-size: 20px;
    font-weight: bold;
  `}
`;

const MyReview = () => {
  const [loaded, setLoaded] = useState(false);
  // 날짜 선택 state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDate, setShowDate] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [reviewInfo, setReviewInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 10;
  // 첫 번째 페이지 여부 확인
  const isFirstPage = pageNumber === 1;
  // 마지막 페이지 여부 확인
  const isLastPage =
    pageNumber === Math.ceil(reviewInfo.length / itemsPerPage);

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

  // 리뷰 데이터 받기
  useEffect(() => {
    const getReviewInfo = async () => {
      const rsp = await AxiosApi.reviewGet(10000001);
      if (rsp.status === 200) setReviewInfo(rsp.data);
    };
    getReviewInfo();
  }, []);

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

  // 페이지 변경 시 아이템 표시
  const handlePageChange = (page) => {
    setPageNumber(page);
  };

  // 현재 페이지에 해당하는 아이템 가져오기
  const getCurrentItems = () => {
    const sortedReviewInfo = reviewInfo.sort(
      (a, b) => new Date(b.writtenTime) - new Date(a.writtenTime)
    );
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedReviewInfo.slice(startIndex, endIndex);
  };

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
              {showDate && (
                <DateSelected onClick={handleButtonClick}>
                  {startDate && endDate
                    ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                    : "Show DatePicker"}
                </DateSelected>
              )}
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
              <ContentNum>번호</ContentNum>
              <ContentTitle>제목</ContentTitle>
              <ContentCafe>카페</ContentCafe>
              <ContentDate>날짜</ContentDate>
            </ContentTop>
            <hr style={{ margin: "1%" }} />
            <ContentDetail>
              {getCurrentItems().map((item, index) => (
                <ContentLists key={index}>
                  <ListNum>{item.reviewNum}</ListNum>
                  <ListTitle>{item.reviewContent}</ListTitle>
                  <ListCafe>{item.cafeNum}</ListCafe>
                  <ListDate>
                    {new Date(item.writtenTime)
                      .toISOString()
                      .split("T")[0]}
                  </ListDate>
                </ContentLists>
              ))}
            </ContentDetail>
            <NumberSelectBox>
              <LeftButton
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={isFirstPage}
              >
                {"<"}
              </LeftButton>
              {Array.from(
                { length: Math.ceil(reviewInfo.length / itemsPerPage) },
                (_, index) => (
                  <PageNumber
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    active={pageNumber === index + 1}
                  >
                    {index + 1}
                  </PageNumber>
                )
              )}
              <RightButton
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={isLastPage}
              >
                {">"}
              </RightButton>
            </NumberSelectBox>
          </ContentBox>
        </Detail>
      </Container>
      <Footer />
      <ChatBot />
    </OutBox>
  );
};

export default MyReview;
