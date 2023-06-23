import React from "react";
import Header from "./component/Header";
import Map from "./component/Map";
import Ranking from "./component/Ranking";
import Recommend from "./component/Recommend"
import { styled } from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Main = () => {
    return(
        <>
        <Container>
        <Header/>
        <Map/>
        <Ranking/>
        <Recommend/>
        </Container>
        </>
    );
};

export default Main;