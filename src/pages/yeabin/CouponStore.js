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
  /* float: left; */
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* .cafe-box {
    display: flex;
    flex-direction: row;
  } */

  .coupon-box {
    display: flex;
    flex-direction: row;
  }


  .coupon {
    /* background-color: #FFCFDA; */
    border: 2px solid #FFCFDA;
    width: 380px;
    height: 130px;
    border-radius: 40px;
    float: left;
    margin: 30px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .couponMenu {
      p {
        font-size: 1.2rem;
        font-weight: bolder;
      }

      button {
        margin-left: 20px;
        width: 120px;
        height: 30px;
        font-size: 1.2rem;
        border: none;
        border-radius: 40px;
        background-color: #FFCFDA; 
      }
      
    }
  }
`;

const CafeBox = styled.div`
  border-radius: 20px;
  float: left;
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
`;

// const Notice = styled.div`
//   color: lightgrey;
//   font-size: 0.8rem;
//   line-height: .5rem;s
// `;

const CouponStore = () => {
  return(
    <>
    <Container>
      <Box>
        <MyPoint>
          <div>
            <h3>현재 보유 포인트 : </h3>
          </div>
          <div className="goEvent">
            <Link to='/event' className="link_style">받을 수 있는 포인트 확인하기</Link>
          </div>
        </MyPoint>
        <h3>포인트로 카페 할인 받기</h3>
        <CouponBox>
          <div className="coupon-box">
            <div className="coupon">
              <table>
                <tbody>
                  <tr className="couponMenu">
                    <td><p>아메리카노 1000원 할인</p></td>
                    <td>
                      <button>800 Point</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className="coupon"></div>
              {/* <div className="coupon"></div>
              <div className="coupon"></div> */}
          </div>
        </CouponBox>
        <h3>포인트 사용 가능 매장 확인하기</h3>
        <CafeBox>
          <div className="cafe-box">
            <img src={cafeThum} alt="카페썸네일" />
            <div className="cafeName">
              <p>미뉴트 빠삐용</p>
            </div>
          </div>
        </CafeBox>
        <CafeBox></CafeBox>
        <CafeBox></CafeBox>
        <CafeBox></CafeBox>
        {/* <Notice>
          <div>
            <p><b>포인트 유의사항</b></p>
            <p>SWEET KINGDOM 포인트는 100원 단위로 사용 가능하며 1000원부터 이용 가능합니다.</p>
            <p>포인트는 타인에게 양도하거나 판매할 수 없습니다.</p>
          </div>
        </Notice> */}
      </Box>

    </Container>
    </>
  );
};

export default CouponStore;