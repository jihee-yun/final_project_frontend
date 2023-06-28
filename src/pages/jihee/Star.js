import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from '@mui/icons-material/Star';

const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  .yellow {
    color: #f7e600;
  }
`
const Star = () => {

  // 별 선택 상태값 관리
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  // 별 5개 배열 생성
  const starArray = [0, 1, 2, 3, 4];

  const starClick = (index) => {
    let clickStates = [...clicked];
    for(let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  }

  const score = clicked.filter(Boolean).length;
  console.log("현재 별점 : " + score);

  return(
    <>
    <RatingBox>
    {starArray.map(el => (
      <StarIcon key={el} 
      onClick={() => starClick(el)}
      className={clicked[el] && 'yellow'}
      size="10"/>
    ))}
    </RatingBox>
    </>
  );
};

export default Star;
