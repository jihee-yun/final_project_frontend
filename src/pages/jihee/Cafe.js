import React, { useContext } from "react";
import { UserContext } from "../../context/UserStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import seoul from "./images/서울.jpeg";

const Container = styled.div`
  width: 80%;
  padding: 50px;
  margin: 0 auto;
`;

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const CategoryBox = styled.div`
  width: 170px;
  height: 70px;
  border-radius: 5px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
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
  const { setCategory } = context;

  const selectCategory = (category) => {
    setCategory(category);
    navigate('/cafemain')
  }
  return(
    <>
    <Container>
      <Box>
      <CategoryBox imageUrl={seoul} onClick={() => selectCategory("서울특별시")}><p>서울특별시</p></CategoryBox>
      <CategoryBox imageUrl={seoul} onClick={() => selectCategory("경기도")}><p>경기도</p></CategoryBox>
      <CategoryBox imageUrl={seoul} onClick={() => selectCategory("부산광역시")}><p>부산광역시</p></CategoryBox>
      <CategoryBox imageUrl={seoul} onClick={() => selectCategory("제주도")}><p>제주도</p></CategoryBox>
      </Box>
    </Container>
    </>
  );
};

export default Cafe;