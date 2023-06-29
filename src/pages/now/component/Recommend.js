import React from "react";
import { styled } from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Container = styled.div`
width: 90%;
height: 500px;
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
    background-color: #FFD0E4;;
    width: 20%;
    height: auto;
}

.content {
    background-color: #FFD0E4;
    width: 70%;
    height: auto;
}
`;

const CustomSwiper = styled(Swiper)`
	width: 100%;
	height: 400px;
    background-color: #FFD0E4;
    display: flex;
`;

const Recommend = () => {
    

 
    return(
        <>
        <Container>
            <h2 className="title">추천 리스트</h2>
            <RecommendContainer>
            <CustomSwiper
            modules={[Autoplay]}
			autoplay={{
				delay: 5000,
			}}>
            <SwiperSlide>
            <div className="left">임시 슬라이드1</div>
            <div className="content"></div>
            </SwiperSlide> 
            <SwiperSlide>
            <div className="left">임시 슬라이드2</div>
            <div className="content"></div>
            </SwiperSlide>
            </CustomSwiper>
            </RecommendContainer>
        </Container>
        </>

    );
}

export default Recommend;