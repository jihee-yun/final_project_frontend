import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./Api/AxiosApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const AdminReportBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 30px;
    padding: 20px;

    h2 {
        color: #FFCFDA;
        font-weight: bolder;
        margin-top: -20px;
    }

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: -10px;
        cursor: pointer;
    }

    .logo img {
        width: 150px;
        height: 130px;
    }

    .board {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        margin-top: -5px;
        width: 45%;
        margin-left: 50px;
    }

    .board th,
    .board td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    .board th {
        background-color: #f2f2f2;
        text-align: center;
    }

    .board tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    .board tr:hover {
        background-color: #ddd;
    }

    .number {
        width: 100px;
        height: 30px;
    }

    .title {
        width: 300px;
        height: 30px;
    }

    .user {
        width: 160px;
        height: 30px;
    }

    .date {
        width: 150px;
        height: 30px;
    }

    .selectBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-bottom: 20px;
    }

    .btn {
        padding: 10px 20px;
        border: none;
        color: black;
        font-weight: bolder;
        font-size: 15px;
        background-color: white;
        cursor: pointer;
    }

    span {
        font-size: 25px;
    }
`;

const DateSelected = styled.p`
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


// 하단 페이지 숫자 표시 박스
const NumberSelectBox = styled.div`
  height: 30px;
  margin-top: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// 페이지 1개씩 좌측 이동
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
// 페이지 한개씩 우측 이동
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
// 하단 페이지 번호
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
  ${({ disabled }) =>
    disabled &&
    `
  pointer-events: none;
  color: gray;
  `}
`;

const SuperLeftButton = styled.button`
  width: 30px;
  height: 30px;
  letter-spacing: -2px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-right: 1%;
  cursor: pointer;
`;
const SuperRightButton = styled.button`
  width: 30px;
  height: 30px;
  letter-spacing: -2px;
  font-size: large;
  color: #7d5a5a;
  border: 0;
  background-color: #f1d1d1;
  border-radius: 50%;
  margin-left: 1%;
  cursor: pointer;
`;




const AdminReport = () => {
    const navigate = useNavigate("");


    // 날짜 선택 state
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [reportNum, setReportNum] = useState("");

    const [reportInfo, setReportInfo] = useState([]);
    const [pageNumber, setPageNumber] = useState("");
    const perPage = 10;

    // 선택한 신고 정보를 저장하는 상태
    const [selectedReport, setSelectedReport] = useState(null);

    // 신고 정보를 클릭했을 때 호출되는 함수
    const handleReportClick = (report) => {
        setSelectedReport(report);
        navigate(`/admin/report?reportNum=${report.reportNum}`);
        
    };

    // 선택한 신고 정보를 닫을 때 호출되는 함수
    const handleCloseReport = () => {
        setSelectedReport(null);
        navigate("/admin/report");
    };

    // 첫번째 페이지
    const firstPage = pageNumber === 1;

    // 마지막 페이지
    const lastPage = Math.ceil(reportInfo.length / perPage);

    const handleDateChange = (date) => {
        setStartDate(date[0]);
        setEndDate(date[1]);

    // startDate와 endDate가 설정되면 DatePicker를 숨김
        if (date[0] && date[1]) {
            setShowDatePicker(false);
            setShowDate(true);
        }
    };

     // 날짜 선택 누르면 달력 표시, 제거
    const handleButtonClick = () => {
        setShowDatePicker(!showDatePicker);
        setShowDate(!showDate);
    };

    useEffect(() => {
        // 신고 데이터 받기
        const getReportInfo = async () => {
          const rsp = await AxiosApi.reportGetAll();
          if (rsp.status === 200) setReportInfo(rsp.data);
        };
      
        // getReportInfo 함수 호출
        getReportInfo();
      }, []);

    // 페이지 변경 시 아이템 표시
    const handlePageChange = (page) => {
        setPageNumber(page);
    };


    // 현재 페이지에 해당하는 아이템 가져오기
    const getCurrentItems = () => {
        // reportDate를 기준으로 내림차순으로 reportInfo를 정렬합니다.
        const sortedReportInfo = reportInfo.sort(
          (a, b) => new Date(b.reportDate) - new Date(a.reportDate)
        );
      
        const startIndex = (pageNumber - 1) * perPage;
        const endIndex = startIndex + perPage;
      
        return sortedReportInfo.slice(startIndex, endIndex);
      };

  // 페이지 10개씩 나누어 표시하기
  const getPageNumbers = () => {
    const totalPageCount = Math.ceil(reportInfo.length / perPage);
    const currentPage = pageNumber;

    const pageNumbers = [];

    if (currentPage <= 10) { // 현재 페이지가 10 이하인 경우
      for (let i = 1; i <= Math.min(10, totalPageCount); i++) {
        pageNumbers.push(i);
      }
      if (totalPageCount > 10) {
        pageNumbers.push("...");
        pageNumbers.push(totalPageCount);
      }
    } else { // 현재 페이지가 11 이상인 경우
      pageNumbers.push(1);
      pageNumbers.push("...");
      const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
      const endPage = Math.min(startPage + 9, totalPageCount);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPageCount) {
        pageNumbers.push("...");
        pageNumbers.push(totalPageCount);
      }
    }

    return pageNumbers;
  };


    const pageNumbers = getPageNumbers();

    // 조회 기간을 전체로 설정
    const handleDateAll = () => {
        setStartDate(new Date(2019, 11, 31));
        setEndDate(new Date());
        setPageNumber(1);
    };
    // 조회 기간을 일주일로 설정
    const handleDateWeek = () => {
        const today = new Date();
        const oneWeekAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);
        setStartDate(oneWeekAgo);
        setEndDate(today);
        setPageNumber(1);
    };
    // 조회 기간을 한 달로 설정
    const handleDateMonth = () => {
        const today = new Date();
        const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate() -1);
        setStartDate(oneMonthAgo);
        setEndDate(today);
        setPageNumber(1);
    };
    // 조회 기간을 일 년으로 설정
    const handleDateYear = () => {
        const today = new Date();
        const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
        setStartDate(oneYearAgo);
        setEndDate(today);
        setPageNumber(1);
    };

    const LogoClick = () => {
        navigate('/admininfo');
    }
    
    
    return(
        <AdminReportBlock>
            
            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
            </div>

            
            <div className="report">
                <h2>신고 내역</h2>
            </div>

            <div className="selectBtn">
                <button className="btn" onClick={handleDateAll}>전체</button>
                <span>|</span>
                <button className="btn" onClick={handleDateWeek}>일주일</button>
                <span>|</span>
                <button className="btn" onClick={handleDateMonth}>한 달</button>
                <span>|</span>
                <button className="btn" onClick={handleDateYear}>일 년</button>
            </div>

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
           
        
            <table className="board">
                <thead>
                    <tr>
                    <th className="number">번호</th>
                    <th className="user">작성자</th>
                    <th className="title">제목</th>
                    <th className="date">날짜</th>
                    </tr>
                </thead>
                <tbody>
            {getCurrentItems().map((report) => (
                <tr onClick={() => handleReportClick(report)}>
                    <td className="number">{report.reportNum}</td>
                    <td className="user">{report.userId}</td>
                    <td className="title">{report.title}</td>
                    <td className="date">{report.reportDate}</td>
                </tr>
            ))}
        </tbody>
        </table>
        <NumberSelectBox>
              <SuperLeftButton
                onClick={() => setPageNumber(1)}
                disabled={firstPage}
              >
                {"<<"}
              </SuperLeftButton>
              <LeftButton
                onClick={() => handlePageChange(pageNumber - 1)}
                disabled={firstPage}
              >
                {"<"}
              </LeftButton>
              {pageNumbers.map((page, index) => (
                <PageNumber
                  key={index}
                  onClick={() => handlePageChange(page)}
                  active={pageNumber === page}
                  disabled={page === "..."}
                >
                  {page}
                </PageNumber>
              ))}
              <RightButton
                onClick={() => handlePageChange(pageNumber + 1)}
                disabled={lastPage}
              >
                {">"}
              </RightButton>
              <SuperRightButton
                onClick={() => setPageNumber(Math.ceil(reportInfo.length / perPage))}
                disabled={lastPage}
              >
                {">>"}
              </SuperRightButton>
            </NumberSelectBox>

       
        </AdminReportBlock>
    );
}

export default AdminReport;