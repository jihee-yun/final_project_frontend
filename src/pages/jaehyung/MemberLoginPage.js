import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MemberApi from "./api/MemberApi";
import { UserContext } from "../../context/UserStore";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
`;
const TextBox = styled.p`
  font-size: 2rem;
`;

const LoginBox = styled.div`
  display: flex;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const IdInputLabel = styled.label`
  margin-bottom: 5px;
`;
const IdInput = styled.input`
  margin-bottom: 10px;
`;
const PasswordInputLabel = styled.label`
  margin-bottom: 5px;
`;
const PasswordInput = styled.input`
  margin-bottom: 10px;
`;
const AuthSelect = styled.div`
  display: felx;
`;
const RadioLabel = styled.label`
  margin-right: 10px;
`;
const RadioButton = styled.input`
  margin-right: 5px;
`;
const LoginButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  background-color: white;
  border: 0px;
  font-weight: bold;
  cursor: pointer;

`;

const MemberLoginPage = () => {
  const navigate = useNavigate();
  // 파이어베이스 이미지 로드용
  const [imageUrls, setImageUrls] = useState([]);
  // 일반 회원, 사업자 회원 구분
  const [authority, setAuthority] = useState("ROLE_MEMBER");
  // useContext 토큰 저장
  const {setGrantType, setAccessToken, setRefreshToken, setUserNum } = useContext(UserContext);

  // 파이어베이스 스토리지 이미지 로딩
  useEffect(() => {
    const storageIconRef = ref(storage, "essential");

    Promise.all([
      getDownloadURL(ref(storageIconRef, "logo.png")),
    ])
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("아이콘 이미지 로딩 실패!!", error);
      });
  }, []);

  const handleAuthTypeChange = (event) => {
    setAuthority(event.target.value);
  };

  // 로그인 함수
  const handleLogin = async () => {
    const memberId = document.getElementById("memberId").value;
    const password = document.getElementById("password").value;
    const authorityGet = authority;

    try {
      let rsp;
      if (authorityGet === "ROLE_USER") {
        rsp = await MemberApi.userLogin(memberId, password);
      } else if (authorityGet === "ROLE_MEMBER") {
        rsp = await MemberApi.memberLogin(memberId, password);
      }

      if(rsp.status){
        const { grantType, accessToken, refreshToken } = rsp.data;
        console.log("로그인 성공:", rsp.data);
        // 방식과 토큰 저장
        setGrantType(grantType);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        navigate("/mypage");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  };

  return(
    <Container>
      <Logo src={imageUrls[0]} alt="반전 로고 이미지" onClick={()=>navigate("/")}></Logo>
      <TextBox>로그인 테스트</TextBox>
      <LoginBox>
        <InputBox>
          <IdInputLabel htmlFor="memberId">아이디</IdInputLabel>
          <IdInput id="memberId" type="text" />
          <PasswordInputLabel htmlFor="password">비밀번호</PasswordInputLabel>
          <PasswordInput id="password" type="password" />          
          <AuthSelect>
            <RadioLabel>
              <RadioButton
                type="radio"
                name="authority"
                value="ROLE_USER"
                checked={authority === "ROLE_USER"}
                onChange={handleAuthTypeChange}
              />
              일반 회원(미적용 기능)
            </RadioLabel>
            <RadioLabel>
              <RadioButton
                type="radio"
                name="authority"
                value="ROLE_MEMBER"
                checked={authority === "ROLE_MEMBER"}
                onChange={handleAuthTypeChange}
              />
              사업자 회원(미적용 기능)
            </RadioLabel>
          </AuthSelect>
        </InputBox>
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </LoginBox>
      <SignUpButton onClick={()=>navigate("/membersignup")}>회원가입 테스트로 이동</SignUpButton>
    </Container>
  );
};
export default MemberLoginPage;