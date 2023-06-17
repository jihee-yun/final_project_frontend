import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";

const CafeDetail = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { cafeNum } = context; // cafeNum 유저스토어에 저장하기

  console.log(cafeNum);

  return(
    <>

    </>
  );
};

export default CafeDetail;