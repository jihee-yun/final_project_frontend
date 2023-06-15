import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";

const CafeMain = () => {
  const context = useContext(UserContext);
  const { category } = context;

  console.log(category);

  return(
    <>
    메롱
    </>
  );
};

export default CafeMain;
