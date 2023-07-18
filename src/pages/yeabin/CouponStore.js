import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "./Api/AxiosApi";
import Header from "../now/component/Header";

// 포인트로 카페 쿠폰 결제하는 상점

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MyPoint = styled.div`

 .goEvent {
    color: gray;
    font-size : 0.8rem;
    margin: 10px 0 60px 0;

    .link_style {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const CouponBox = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const CouponList = styled.div`
  border: 4px solid #FFCFDA;
  width: 400px;
  height: 130px;
  border-radius: 40px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  margin-right: 25px;
  font-size: 1.1rem;
  font-weight: bolder;
`;

const Price = styled.div`
  font-weight: bolder;
  background-color: #FFCFDA;
  padding: 10px;
  border-radius: 40px;
  cursor: pointer;
`;

const CafeAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const CafeBox = styled.div`
  border-radius: 20px;
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

const Notice = styled.div`
  color: grey;
  font-size: 0.8rem;
  line-height: .5rem;
  margin: 100px 0 60px 0;
`;


const InfoList = styled.div`
  margin-top: 60px;
`;

const CouponStore = () => {
  const [couponInfo, setCouponInfo] = useState("");
  const [myinfo, setMyInfo] = useState("");
  const navigate = useNavigate();
  // const context = useContext(UserContext);
  // const {setCouponNum} = context;

  console.log(couponInfo);

  useEffect(() => {
    const couponInfo = async() => {
      const rsp = await AxiosApi.getCoupon("ALL");
      if(rsp.status === 200) setCouponInfo(rsp.data);
    };
    couponInfo();
  }, []);

  // useEffect(() => {
  //   const myinfo = async() => {
  //     const response = await AxiosApi.myInfoGet("ALL");
  //     if(response.status === 200) setMyInfo(response.data);
  //   };
  //   myinfo();
  // }, []);

  const navigatePay = (id) => {
    const filterCoupon = couponInfo.filter(coupon => coupon.id === id);
    navigate('/couponPayment', {state : {filterCoupon}});
  };


  return(
    <>
    <Header />
    <Container>
      <MyPoint>
          {/* {myinfo && myinfo.map(item => ( */}
            <InfoList>
              <Name>님 현재 보유 포인트 : </Name> 
            </InfoList>
          {/* ))} */}
        <div className="goEvent">
          <Link to='/event' className="link_style">받을 수 있는 포인트 확인하기</Link>
        </div>
      </MyPoint>
      <h3>포인트로 카페 할인 받기</h3>
      <CouponBox>
          {couponInfo && couponInfo.map(item => (
            <CouponList key={item.couponNum}>
              <Name>{item.couponName}</Name>
              <Price onClick={() => navigatePay(item.id)}>{item.price} 포인트</Price>
            </CouponList>
          ))}
      </CouponBox>
      <h3>지역 별 포인트 사용 가능 매장 확인하기</h3>
      <CafeAll>
        <CafeBox></CafeBox>
        <CafeBox></CafeBox>
        <CafeBox></CafeBox>
        <CafeBox></CafeBox>
      </CafeAll>
      <Notice>
        <div>
          <p><b>포인트 유의사항</b></p>
          <p>SWEET KINGDOM 포인트는 100원 단위로 사용이 가능합니다.</p>
          <p>포인트는 타인에게 양도하거나 판매할 수 없습니다.</p>
        </div>
      </Notice>
    </Container>
    </>
  );
};

export default CouponStore;