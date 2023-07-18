import { useState, useRef } from "react";
import { styled } from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;



const ServiceCenter = () => {

    return(
        <>
        <Container>
            <h3>고객센터</h3>
        </Container>
        
        </>
    )
}

export default ServiceCenter;