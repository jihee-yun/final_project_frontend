import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Box = styled.div`
  margin-top: 100px;
`;

const Container = styled.div`


  .myPoint {
    margin-top: 80px;
    font-size: 1.1rem;
  }  

  .minus {
    margin-top: 50px;
    font-size: 1.1rem;
  }

  .payBtn {
    width: 350px;
    height: 40px;
    border: none;
    background-color: #FFCFDA;
    font-size: 1.1rem;
    font-weight: bolder;
    margin: 80px 0  80px 0;
    cursor: pointer;
  }
`;

const CouponBox = styled.div`
  border: 1px solid black;
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CouponList = styled.div`
`;

const Name = styled.div`

`;

const MyPoint = styled.div`
`;

const Price = styled.div`
`;

const CouponPayment = () => {

  const location = useLocation();
  const info = location.state && location.state.filterCoupon;

  console.log(info);

  return(
    <Box>
      <Container>
        <CouponBox>
          {info && info.map(coupon => (
            <CouponList key={coupon.id} >
              <Name>{coupon.couponName}</Name>
              <MyPoint>보유 포인트 : </MyPoint>
              <Price>차감 포인트 : {coupon.price}</Price>
              <button>결제 하기</button>
            </CouponList>
          ))}
        </CouponBox>
          
        {/* <div>
          <p className="myPoint">보유 포인트 : </p>
          <p className="minus">차감 포인트 : </p>
          <button className="payBtn">결제 하기</button>
        </div> */}
      </Container>
    </Box>
  );
};

export default CouponPayment;