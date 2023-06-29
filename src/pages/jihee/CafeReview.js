import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AvgStar from "./AvgStar";
import Star from "./Star";
import img from "./images/카페임시이미지.jpeg";

import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  .back{
    margin: 30px 0;
    color: darkgray;
    cursor: pointer;
  }

  hr {
    background-color: lightgray;
    border: .3px solid lightgray;
  }
`;

const Box = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ReviewBox = styled.div`
  width: 100%;
`;

const MemberBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  .profile img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
  }

  .right{
    margin-left: 20px;
    line-height: 30px;
    font-size: .9rem;

    .id{
      margin-left: 3px;
      font-size: .7rem;
    }
  }
`;

const Content = styled.div`
 width: 100%;
 margin-top: 20px;
 p{
  font-size: .9rem;
  padding-left: 10px;
 }
 
`;

const Img = styled.div`
 width: 100%;
 display: flex;
 gap: 20px;

 .photo img{
  width: 150px;
  height: 150px;
  margin-top: 20px;
  object-fit: cover;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
 }
`;

const CafeReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state;

  console.log(info);

  const star = 5;
  
  const prevPage = () => {
    navigate(-1);
  }
  return(
    <>
    <Container>
    <Box>
    <div className="back" onClick={prevPage}><ArrowBackIosIcon style={{width: "18px", height: "18px"}}/></div>
    <br /><br />
    <AvgStar star={star}/>
    <br /><br /><br />
    <ReviewBox>
      <MemberBox>
        <div className="profile"><img src={img} alt="프사" /></div>
        <div className="right">
          <div className="star"><Star /></div>
          <div className="id"><span>jihee1025&nbsp;&nbsp;&nbsp;2023-06-29</span></div>
        </div>
      </MemberBox>
      <Content><p>커피가 맛있어여..</p></Content>
      <Img>
      <div className="photo" imageurl={img}><img src={img} alt="이미지" /></div>
      <div className="photo" imageurl={img}><img src={img} alt="이미지" /></div>
      </Img>
      <br /><hr />
    </ReviewBox>
    </Box>
    </Container>
    </>
  );
};

export default CafeReview;