import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosApi from "./api/AxiosApi";
import { UserContext } from "../../context/UserStore";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const OutBox = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  width: 100%;
  height: 200px;
  border: 2px solid black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideMenu = styled.div`
  width: 300px;
  height: 800px;
  display: flexbox;
  border: 1px solid blue;
  justify-content: right;

  .profileImg {
    width: 100px;
    height: 100px;
  }

`;

const MyReview = styled.button`
  width: 200px;
  height: 50px;
  margin-left: auto;
  background-color: white;
  cursor: pointer;

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
  useEffect(() => {
    const storageIconRef = ref(storage, "essential");

    Promise.all([
      getDownloadURL(ref(storageIconRef, "logo.png")),
    ])
      .then((urls) => {
        setImageUrls(urls);
        // console.log(imageUrls);
      })
      .catch((error) => {
        console.error("아이콘 이미지 로딩 실패!!", error);
      });
  }, []);


  return(
    <OutBox>
    <Header></Header>
    <Container>
      <SideMenu>
        <img className="profileImg" src={imageUrls[0]} alt="프로필 이미지" />
        <MyReview onClick={()=>navigate("/mypage/review")}>작성 리뷰</MyReview>
        <MyReview>참여 챌린지</MyReview>
        <MyReview>참여 소모임</MyReview>
        <MyReview>참여 이벤트</MyReview>
        <MyReview>캘린더</MyReview>
        <MyReview>결제 / 포인트</MyReview>
        <MyReview>랭킹</MyReview>
        <MyReview>회원 정보</MyReview>
        <MyReview>문의 / 신고 내역</MyReview>


      </SideMenu>
      <Detail>



      </Detail>
    </Container>
    <Footer></Footer>
    </OutBox>
  );
}
export default MyPage;