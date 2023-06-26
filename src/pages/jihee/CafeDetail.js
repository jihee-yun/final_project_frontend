import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import logo from "./images/logo.png";
import address from "./images/location.png";
import time from "./images/clock.png";
import phone from "./images/mobile-phone.png";
import menu from "./images/restaurant-menu.png";
import Slider from "./Slider";
import AxiosApi from "./api/AxiosApi";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  /* box-shadow: 0 3px 3px lightgray; */

  img{
    width: 100px;
    height: 100px;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }

  .top {
    padding: 30px;
  }
  .middle{
    position: relative;
    
    .decobox{
      width: 120px;
      height: 60px;
      border-radius: 30px;
      left: 25px;
      top: 35px;
      background-color: #FFCFDA;
      position: absolute;
      z-index: 0;
    }

    .content {
      padding: 30px;
      margin-left: 10px;

      h2{
        margin-bottom: 100px;
        position: relative;
        z-index: 1;
      }
    }
  }

  .bottom{
    background-color: #FFCFDA;
    padding: 30px;

    img{
      margin: 0;
      width: 30px;
      height: 30px;
    }

    .detailbox{
      display: flex;
      align-items: center;
      padding: 20px;
      font-weight: bold;

      &:nth-child(2){
        align-items: flex-start;
      }

      span{
        margin-left: 10px;
      }
      p{
        margin: 0 0 0 10px;
        line-height: 30px;
      }
    }
  }

  .map {
    width: 100%;
    height: 500px;
    border: 1px solid pink;
  }
`;

const CafeDetail = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { cafeNum } = context; 

  // 카페 디테일 정보 받아오기
  const [detailInfo, setDetailInfo] = useState("");

  useEffect(() => {
    const detailInfo = async() => {
      const response = await AxiosApi.detailInfoGet(cafeNum);
      if(response.status === 200) setDetailInfo(response.data);
    };
    detailInfo();
  }, [cafeNum]);

  console.log(cafeNum);
  console.log(detailInfo);

  return(
    <>
    <Container>
    <Link to="/cafe/main" style={{ textDecoration: "none", color: "inherit"}}><img src={logo} alt="스위트킹덤로고" /></Link>
    <div className="top">
    <h1>카페 이름</h1>
    <h3>카페 주소</h3>
    </div>
    <Slider />
    <div className="middle">
    <div className="content">
    <h2>인트로로로로로로로로로로로로로</h2>
    <p>카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용카페 상세 설명 내용</p>
    </div>
    <div className="decobox"></div>
    <div className="map">지도 들어가는 부분</div>
    </div>
    <div className="bottom">
    <div className="detailbox"><img src={address} alt="위치" /><span>주소</span></div>
    <div className="detailbox"><img src={menu} alt="메뉴" /><div className="menulist"><p>대표메뉴1</p><p>대표메뉴2</p><p>대표메뉴3</p></div></div>
    <div className="detailbox"><img src={time} alt="시간" /><span>영업시간</span></div>
    <div className="detailbox"><img src={phone} alt="전화" /><span>전화번호</span></div>
    </div>
    </Container>
    </>
  );
};

export default CafeDetail;