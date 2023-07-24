import React from "react";
import { styled } from "styled-components";


const Details = styled.div`
    width: 300px;
    height: 500px;
    background-color: #FFD0E4;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .topimg{
        width: 90%;
        height: 200px;
        background-color: white;
        margin-top: 20px;
        border-radius: 5px;
    }
    .title {
        border-bottom: solid;
    }
    .sub {
        width: 90%;
        list-style: none;
        line-height: 1.6em;
        
        li {
            color: #848484;
        }
    }
`;


const Detail = () => {

    return(
        <>
         <Details>
            <div className="topimg"></div>
            <h3 style={{color:"white"}}>카페이름</h3>
            <ul className="sub">
                <li>경기 김포시 양촌읍 삼도로 196-30</li>
                <li>031-988-6363</li>
                <li>10:30-17:30(월,화 휴무)</li>
                <li>https://cicamuseum.com</li>
            </ul>
        </Details>
        </>
    )
} 
export default Detail;