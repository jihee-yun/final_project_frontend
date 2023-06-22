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

.RankingContainer {
    display: flex;
    background-color: black;
    width: 90%;
    height: 400px;
    gap: 20px 2%;
    flex-wrap: wrap;
    
}

.RankingItem {
    background-color: blue;
    width: 32%;
    height: 170px;
    border-radius: 5px;
}
`;

const Ranking = () => {


    return(
        <>
        <Container>
            <h3 className="title">지금 순위</h3>
            <div className="RankingContainer">
                <div className="RankingItem"></div>
                <div className="RankingItem"></div>
                <div className="RankingItem"></div>
                <div className="RankingItem"></div>
                <div className="RankingItem"></div>
                <div className="RankingItem"></div>
            </div>
        </Container>
        </>

    );
}

export default Ranking;