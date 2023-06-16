import React, { useState } from "react";
import styled from "styled-components";



const Roulette = () => {
  const [selectItem, setSelectItem] = useState(null);
  const itmes = ['1', '2', '3', '4', '5'];

  const spinRoulette = () => {
    const random = Math.floor(Math.random() * itmes.length);
    setSelectItem(itmes[random]);
  };

  return(
    <>
    <div>
      <h3>룰렛</h3>
      {selectItem && <p>당첨 : {selectItem}</p>}
      {/* <ul>
        {itmes.map()}
      </ul> */}
    </div>
    </>
  );
};

export default Roulette;