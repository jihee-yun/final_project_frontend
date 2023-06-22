import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
width: 90%;
height: 500px;
background-color: red;
margin-top: 20px;
border-radius: 10px;
display: flex;
align-items: center;
flex-direction: column;

.RecommendContainer{
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 20px;
}

.left {
    background-color: blue;
    width: 50px;
    height: 100px;
}

.content {
    background-color: blue;
    width: 100px;
    height: 100px;
}
`;

const Recommend = () => {


    return(
        <>
        <Container>
            <h3 className="title">추천 리스트</h3>
            <div className="RecommendContainer">
            <div className="left"></div>
            <div className="content"></div>
            </div>
        </Container>
        </>

    );
}

export default Recommend;