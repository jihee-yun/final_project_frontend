import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from ".././api/AxiosApi";
import { UserContext } from "../../../context/UserStore";
import { storage } from "../../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Side = styled.div`
  width: 300px;
  height: 800px;
  display: flexbox;
  border: 1px solid black;
  justify-content: right;

  .profileImg {
    width: 100px;
    height: 100px;
  }
`;

const NaviButton = styled.button`
  width: 200px;
  height: 50px;
  margin-left: auto;
  background-color: white;
  cursor: pointer;

`;

const SideMenu = () => {
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



  return (
    <Side>
        <img className="profileImg" src={imageUrls[0]} alt="프로필 이미지" />
        <NaviButton onClick={()=>navigate("/mypage/review")}>작성 리뷰</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/challenge")}>참여 챌린지</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/somoim")}>참여 소모임</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/event")}>참여 이벤트</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/calendar")}>캘린더</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/point")}>결제 / 포인트</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/ranking")}>랭킹</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/information")}>회원 정보</NaviButton>
        <NaviButton onClick={()=>navigate("/mypage/report")}>문의 / 신고 내역</NaviButton>  
      
      
      
    </Side>
  );
};
export default SideMenu;