import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const OuterBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: pink;

  .roulette {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    border-radius: 50%;
    border: 1px solid black;
  }
`;

const ItemBox = styled.div`
  .item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding-top: 10%;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .item:nth-child(1) {
    transform: rotate(0deg);
  }
  .item:nth-child(2) {
    transform: rotate(90deg);
  }
  .item:nth-child(3) {
    transform: rotate(180deg);
  }
  .item:nth-child(4) {
    transform: rotate(270deg);
  }
`;

const LineBox = styled.div`
  .line {
    position: absolute;
    top: 0;
    bottom: 50%;
    left: 50%;
    width: 1px;
    background-color: black;
    transform-origin: bottom;
  }

  .line:nth-child(1) {
    transform: rotate(45deg);
  }
  .line:nth-child(2) {
    transform: rotate(135deg);
  }
  .line:nth-child(3) {
    transform: rotate(225deg);
  }
  .line:nth-child(4) {
    transform: rotate(315deg);
  }
`;

const Roulette = () => {
  const [selectItem, setSelectItem] = useState(null);
  const itmes = ['1', '2', '3', '4', '5'];

  const spinRoulette = () => {
    const random = Math.floor(Math.random() * itmes.length);
    setSelectItem(itmes[random]); 
  };

  return(
    <>
    <Container>
      <h3>룰렛</h3>
      <OuterBox>
        <div className="roulette">
          <ItemBox>
            <div className="item">500원</div>
            <div className="item">100원</div>
            <div className="item">50원</div>
            <div className="item">30원</div>
          </ItemBox>
          <LineBox>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </LineBox>
        </div>

      </OuterBox>

      {selectItem && <p>당첨 : {selectItem}</p>}
      {/* <ul>
        {itmes.map()}
      </ul> */}
    </Container>
    </>
  );
};

export default Roulette;