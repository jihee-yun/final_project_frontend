import React from "react";
import { styled } from "styled-components";
import KakaoMap from "./KakaoMap";
import mainimg from "../images/mainimg.png"


const Container = styled.div`
width: 90%;
height: auto;
margin-top: 20px;
border-radius: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
overflow: hidden;
align-items: center;

`;

const TopContainer = styled.div`
display: flex;
`


const Title = styled.div`
margin-top: -30px;
margin-left: 15px;

h1 {
    font-family: 'Pretendard-Regular';
    font-weight: 800; 
    font-size: 3rem;
    color: #424242;
}

`;

const SideImg =styled.div`
 .img {
    width: 60px;
    height: 60px;
}
`;

const MapContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 20px 1%;
    border: 10px;

`;





const Map = () => {


    return(
        <>
        <Container>
        <TopContainer>
        <SideImg>
        <img src={mainimg} className="img" />
        </SideImg>
        <Title>
            <h1>8월 추천지역</h1>
        </Title>
        </TopContainer>
        <MapContainer>
        <KakaoMap/>
        </MapContainer>
        </Container>
        </>

    );
};

export default Map;