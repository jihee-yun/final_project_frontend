import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import { UserContext } from "../context/UserStore";

const Box = styled.div`
  margin-top: 100px;
  @media (max-width: 768px) {
    width: 100%;
  }

`;

const Container = styled.div`
  /* border: 1px solid lightgray; */
  width: 40%;
  margin: 0 auto;

  h2 {
    margin-top: 50px;
    text-align: center;
  }

  .payBtn {
    width: 350px;
    height: 50px;
    border: none;
    background-color: #FFCFDA;
    font-size: 1.1rem;
    font-weight: bolder;
    margin: 80px 0  80px 0;
    cursor: pointer;
  }
`;

const CouponBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CouponList = styled.div`
`;

const Name = styled.div`
  margin-top: 50px;
  font-size: 1.2rem;
  font-weight: bolder;
`;

const MyPoint = styled.div`
  margin-top: 50px;
  font-size: 1.1rem;
`;

const Price = styled.div`
  margin-top: 50px;
  font-size: 1.1rem;
`;

const CouponPayment = () => {
  const location = useLocation();
  const info = location.state && location.state.filterCoupon;
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { userNum, isLogin, grantType, accessToken } = context
  const [pointInfo, setPointInfo] = useState([]);

  useEffect(() => {
    const getPointInfo = async () => {
      if (isLogin && userNum) {
        const rsp = await AxiosApi.myInfoGet(userNum, grantType, accessToken);
        if(rsp.status === 200) setPointInfo(rsp.data);
      }
    };
    getPointInfo();
  }, [userNum, isLogin, grantType, accessToken]);

  if (!isLogin) {
    navigate('/memberlogin');
    return null;
  };

  const coupon = info[0];
  const couponPrice = coupon.price;
  const couponId = coupon.id;

  const handlePayClick = async () => {
    const response = await AxiosApi.couponPayment(userNum, coupon.id, grantType, accessToken);
    console.log(response.data);
    if(response.data === true) {
      navigate('/payComplete'); // 결제 성공 시 payComplete 페이지로 이동
    } else {
      alert('쿠폰 결제에 실패했습니다.'); // 실패 시 알림 창 띄우기
    }
  };

  console.log(userNum);
  console.log(couponId);

  return(
    <>
    <Box>
    <Container>
      <h2>쿠폰 결제</h2>
      <CouponBox>
        {info && info.map(coupon => (
          <CouponList key={coupon.id} >
            <Name>{coupon.couponName}</Name>
            <MyPoint>보유 포인트 : {pointInfo[0]?.totalPoint || 0} </MyPoint>
            <Price>차감 포인트 : {coupon.price}</Price>
            <button className="payBtn" onClick={handlePayClick}>결제하기</button>
          </CouponList>
        ))}
      </CouponBox>
    </Container>
    </Box>
    </>
  );
};

export default CouponPayment;