import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./api/AxiosApi";
import { UserContext } from "../../context/UserStore";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";

const OutBox = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  border: 2px solid yellow;
  justify-content: right;
`;









const MyPage = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // 로그인시 회원 번호
  const { userNum } = useContext(UserContext);

  // 파이어베이스 스토리지 이미지 로딩
  // useEffect(() => {
  //   const storageIconRef = ref(storage, "essential");

  //   Promise.all([
  //     getDownloadURL(ref(storageIconRef, "logo.png")),
  //   ])
  //     .then((urls) => {
  //       setImageUrls(urls);
  //       // console.log(imageUrls);
  //     })
  //     .catch((error) => {
  //       console.error("아이콘 이미지 로딩 실패!!", error);
  //     });
  // }, []);


  return(
    <OutBox>
    <Header />
    <Container>
      <SideMenu />
      <Detail>



      </Detail>
    </Container>
    <Footer />
    </OutBox>
  );
}
export default MyPage;