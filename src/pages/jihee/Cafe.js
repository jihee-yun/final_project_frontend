import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import seoul from "./images/서울.jpeg";


const Container = styled.div`
  width: 80%;
  padding: 50px; // 헤더랑 푸터 여백주려고 넣어둠
  margin: 0 auto;
`;

const Box = styled.div`
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 30px;
  }
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const CategoryBox = styled.div`
  width: 170px;
  height: 70px;
  border-radius: 5px;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
  /* box-shadow: 0 3px 3px #A4A4A4; */
  cursor: pointer;

  p {
    margin: 40px 0 0 10px;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }
`;

const Cafe = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setRegion } = context;

  const selectCategory = (category) => {
    setRegion(category);
    navigate('/cafe/main')
  }
  return(
    <>
    <Container>
      <Box>
      <CategoryBox imageurl={seoul} onClick={() => selectCategory("전체")}><p>전체</p></CategoryBox>
      <CategoryBox imageurl={seoul} onClick={() => selectCategory("서울특별시")}><p>서울특별시</p></CategoryBox>
      <CategoryBox imageurl={seoul} onClick={() => selectCategory("경기도")}><p>경기도</p></CategoryBox>
      <CategoryBox imageurl={seoul} onClick={() => selectCategory("부산광역시")}><p>부산광역시</p></CategoryBox>
      </Box>
    </Container>
    </>
  );
};

export default Cafe;