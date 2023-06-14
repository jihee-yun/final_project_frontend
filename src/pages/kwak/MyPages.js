import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from "./api/AxiosApi";
import { UserContext } from "../../context/UserStore";

const Container = styled.div`

`;


const MyPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState([]);

  // 로그인시 회원 번호
  const { userNum } = useContext(UserContext);




  return(
    <Container>
      


    </Container>
  );
}
export default MyPage;