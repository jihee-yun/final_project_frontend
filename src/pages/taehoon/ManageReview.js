import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./Api/AxiosApi";

const ManageReviewBlock = styled.div`
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
        width: 60px;
        height: 30px;
    }

    .writer {
        width: 70px;
        height: 30px;
    }

    .title {
        width: 150px;
        height: 30px;
    }

    .date {
        width: 120px;
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

    @media (max-width: 768px) {
        .board {
            width: 100%;
            margin-left: 0;
        }

        .title,
        .date {
            width: auto;
        }

        .logo img {
            width: 120px;
            height: 100px;
        }
    }
`;


    const ManageReview = () => {
        const navigate = useNavigate("");

        // 날짜 선택 state
        const [showDatePicker, setShowDatePicker] = useState("");
        const [showDate, setShowDate] = useState("");
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");

        const [reviewInfo, setReviewInfo] = useState("");
        const [pageNumber, setPageNumber] = useState("");
        const perPage = 10;

        const onClickLogo = () => {
            navigate('/admininfo');
    }

     // 첫번째 페이지
     const firstPage = pageNumber === 1;

     // 마지막 페이지
     const lastPage = Math.ceil(reviewInfo.length / perPage);
 
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
    
    return(
        
        <ManageReviewBlock>
            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={onClickLogo}/>
            </div>

            <div className="review">
                <h2>리뷰 관리</h2>
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

            <table className="board">
                <thead>
                    <tr>
                        <th class="number">번호</th>
                        <th class="writer">작성자</th>
                        <th class="title">제목</th>
                        <th class="date">날짜</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </ManageReviewBlock>
    );
}

export default ManageReview;