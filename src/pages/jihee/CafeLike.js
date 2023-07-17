import React, { useState } from "react";
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AxiosApi from "./api/AxiosApi";

const LikeBox = styled.div`
  padding-top: 3px;
`;

const CafeLike = ({cafeNum, memNum}) => {

  const [currentState, setCurrentState] = useState("false")

  const changeLike = async(cafeNum, memNum) => {
    const response = await AxiosApi.cafeLike(cafeNum, memNum);
    console.log(response.data);
    if(response.data === true) {
      setCurrentState("true");
    } else if(response.data === false) {
      setCurrentState("false");
    }
  }
  
  return(
    <>
    <LikeBox onClick={() => changeLike(cafeNum, memNum)}>
      {currentState === "true" ? 
      <FavoriteIcon style={{color:"#FA5858", width:"28px", height:"28px", cursor:"pointer"}}/>
      : <FavoriteBorderIcon style={{color:"#BDBDBD", width:"28px", height:"28px", cursor:"pointer"}}/>
      }
      </LikeBox>
    </>
  );
};

export default CafeLike;