import React, { useState } from "react";
import styled from "styled-components";
import like from "../jihee/images/like1.png";
import AxiosApi from "./api/AxiosApi";

const Like = styled.div`
  margin-top: 20px;
  width: 10%;

  button {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 60px;
    height: 25px;
    background-color: white;
    border: .5px solid lightgray;
    border-radius: 15px;
    box-shadow: 0px 1px 1px lightgray;
    cursor: pointer;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;

const CafeReviewLike = ({memNum, reviewId, likeCount}) => {

  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const changeLikeCount = async(memNum, id) => {
    const response = await AxiosApi.reviewLike(memNum, id);
    console.log(response.data);
    if(response.data === true) {
      setCurrentLikeCount(prevCount => prevCount + 1);
    } else if(response.data === false) {
      setCurrentLikeCount(prevCount => prevCount - 1);
    }
  }

  return(
    <>
    <Like onClick={() => changeLikeCount(memNum, reviewId)}>
      <button><img src={like} alt="좋아요" /><p>{currentLikeCount}</p></button>
    </Like>
    </>
  );
};

export default CafeReviewLike;