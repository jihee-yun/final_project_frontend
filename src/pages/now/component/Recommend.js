import React from "react";
import { styled } from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Container = styled.div`
width: 90%;
height: 500px;
background-color: red;
margin-top: 20px;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;
`;

const RecommendContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;


.left {
    background-color: blue;
    width: 20%;
    height: 400px;
}

.content {
    background-color: blue;
    width: 70%;
    height: 400px;
}
`;

const CustomSwiper = styled(Swiper)`
	width: 100%;
	height: 200px;
	border: 1px solid #000;
	background-color: #333333;
	color: #ffffff;
`;

const Recommend = () => {
    

 
    return(
        <>
        <Container>
            <h3 className="title">추천 리스트</h3>
            <RecommendContainer>
            <CustomSwiper
            modules={[Autoplay]}
			autoplay={{
				delay: 5000,
			}}>
            <SwiperSlide>
            <div className="left">글자</div>
            <div className="content">이미지</div>
            </SwiperSlide> 
            <SwiperSlide>
            <div className="left">글자2</div>
            <div className="content">이미지2</div>
            </SwiperSlide>
            </CustomSwiper>
            </RecommendContainer>
        </Container>
        </>

    );
}

export default Recommend;