import React from "react";
import { styled } from "styled-components";
import PlaceIcon from '@mui/icons-material/Place';
import KakaoMap from "./KakaoMap";
import Detail from "./Detail";


const Container = styled.div`
width: 90%;
height: 500px;
margin-top: 20px;
border-radius: 10px;
box-sizing: border-box;
display: flex;
flex-direction: column;
overflow: hidden;

`;

const MapContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px 1%;
    border: 10px;

`;





const Map = () => {


    return(
        <>
        <Container>
        <div className="title">
            <h2> <PlaceIcon/> 지도로 한눈에 살펴보기</h2>
        </div>

        <MapContainer>
        <KakaoMap/>
        </MapContainer>
        </Container>
        </>

    );
};

export default Map;