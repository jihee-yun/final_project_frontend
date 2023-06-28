import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cafeThum from "./images/cafeThum.png";

// 포인트로 카페 쿠폰 결제하는 상점

const Container = styled.div`
`;

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MyPoint = styled.div`

 .goEvent {
    color: gray;
    font-size : 0.8rem;
    margin-bottom: 50px;

    .link_style {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const CouponBox = styled.div`
  margin-bottom: 80px;

  .coupon-box {
    display: flex;
    flex-direction: row;
  }

  .coupon {
    border: 4px solid #FFCFDA;
    width: 380px;
    height: 130px;
    border-radius: 40px;
    margin: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CafeBox = styled.div`
  border-radius: 20px;
  /* float: left; */
  width: 220px;
  height: 220px;
  margin: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

  .cafeName {
    border-radius: 20px;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
    border-radius: 20px;
  }

  p {
    color: white;
    margin-left: 20px;
    font-weight: bolder;
    position: absolute;
    top: -55px;
    bottom: 0;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.8);
  }

  /* .shadow {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(to top, rgba(0,0,0,.7) 23%, rgba(0,0,0,0) 100%);
  } */

`;

const Notice = styled.div`
  color: grey;
  font-size: 0.8rem;
  line-height: .5rem;
  margin-top: 100px;
`;

const CouponStore = () => {
  return(
    <>
    <Container>
      <Box>
        <MyPoint>
          <div>
            <h3>(회원)님 현재 보유 포인트 : </h3>
          </div>
          <div className="goEvent">
            <Link to='/event' className="link_style">받을 수 있는 포인트 확인하기</Link>
          </div>
        </MyPoint>
        <h3>포인트로 카페 할인 받기</h3>
        <CouponBox>
          <div className="coupon-box">
            <div className="coupon">
              <p>아메리카노 1000원 할인 쿠폰</p>
            </div>
            <div className="coupon"></div>
          </div>
        </CouponBox>
        <h3>포인트 사용 가능 매장 확인하기</h3>
        <CafeBox>
          <div className="cafe-box">
            <img src={cafeThum} alt="카페썸네일" />
            {/* <div className="shadow"></div> */}
            <div className="cafeName">
              <p>미뉴트 빠삐용</p>
            </div>
          </div>
        </CafeBox>
        <Notice>
          <div>
            <p><b>포인트 유의사항</b></p>
            <p>SWEET KINGDOM 포인트는 100원 단위로 사용이 가능합니다.</p>
            <p>포인트는 타인에게 양도하거나 판매할 수 없습니다.</p>
          </div>
        </Notice>
      </Box>

    </Container>
    </>
  );
};

export default CouponStore;