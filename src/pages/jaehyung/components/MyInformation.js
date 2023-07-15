import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import MemberApi from "../api/MemberApi";
import { UserContext } from "../../../context/UserStore";
import Header from "../../now/component/Header";
import Footer from "../../now/component/Footer";
import SideMenu from "./SideMenu";
import ChatBot from "./ChatBot";
import { Password } from "@mui/icons-material";

const OutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 2px solid yellow;
`;
// 상세 페이지 상단 선택 박스(회원 정보 수정, 알림 설정)
const SelectBox = styled.div`
  width: 90%;
  min-width: 500px;
  height: 50px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 90%;
  min-width: 500px;
  margin-top: 3%;
  border: 1px solid #F3E1E1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
const SpecificBox = styled.div`
  margin: 20px;
  border: 1px solid #F3E1E1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
const TitleBox = styled.div`
  margin-top: 5px;
  border: 1px solid blue;
`;

// 각 박스별 정보 표시 p태크
const InfoType = styled.p`
  width: 80%;
  min-width: 100px;
`;
// 변경 불가능한 회원정보 표시하는 텍스트 박스
const TextBox = styled.p`
  width: 80%;
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  margin-top: -5px;
  margin-bottom: 10px;
  padding-left: 10px;
  border: 0;
  background-color: #eee;
`;
// 비밀번호 입력문구
const ValidationMessage = styled.p`
  color: ${props => props.isValid ? 'blue' : 'red'};
`;


// 한 줄 소개 수정 입력창
const Introinput = styled.input`
  width: 90%;
  min-width: 200px;
  height: 150px;
  &:focus {
    outline: none;
  }
  margin-bottom: 10px;
  padding-left: 5px;
`;
// 한 줄 소개 수정 버튼
const IntroButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  color: white;
  background-color: #F1D1D1;
  border: 0;
  cursor: pointer;
`;

// 핸드폰 번호 수정 input
const GrayInput = styled.input`
  width: 80%;
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 5px;
  padding-left: 10px;
  border: 0;
  background-color: #eee;
  &:focus {
    outline: none;
  }
`;
// 핸드폰 정보 수정 버튼
const PhoneChangeButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 5px;
  color: white;
  background-color: #F1D1D1;
  border: 0;
  cursor: pointer;
`;


const MyInformation = () => {
  // useContext 저장값 불러오기
  const {grantType, accessToken, refreshToken, userNum, userName, userAuthority} = useContext(UserContext);

  // 유저 정보 상태 관리
  const [memberInfo, setMemberInfo] = useState(null);
  // 비밀 번호 변경시 비교용
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  // 비밀번호 유효성 검사, 메세지
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordValidationMessage, setPasswordValidationMessage] = useState("");
  const [newPasswordCheckMessage, setNewPasswordCheckMessage] = useState("");



  // 유저 정보 가져오기
  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const rsp = await MemberApi.getMemberInfo(userNum, grantType, accessToken);
        if (rsp.status) {
          setMemberInfo(rsp.data[0]);
          console.log("유저 정보 가져오기 성공: ", rsp.data[0])
        }
      } catch (error) {
        console.log("유저 정보 가져오기 실패: ", error);
      }
    };
    fetchMemberInfo();
  }, [userNum]);

  // 비밀 번호 조합 확인
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    if (regex.test(password)) {
      setPasswordValidationMessage("정상적인 조합입니다.");
      setIsValidPassword(true);
    } else {
      setPasswordValidationMessage("조합을 다시 확인해주세요.");
      setIsValidPassword(false);
    }
  }
  // 새 비밀번호 일치 여부 확인
  const handlePasswordCheckChange = (e) => {
    setNewPasswordCheck(e.target.value);
    if(newPassword === e.target.value) {
      setNewPasswordCheckMessage("새 비밀번호 값이 일치합니다.");
    } else {
      setNewPasswordCheckMessage("새 비밀번호를 동일하게 입력해 주세요.");
    }
  }

  // 비밀번호 수정
  const handlePasswordChange = async () => {
    const password = document.getElementByName("password").value;
    if (newPassword !== newPasswordCheck) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }
    try {
      const rsp = await MemberApi.passwordUpdate(userNum, password, newPassword, grantType, accessToken);
      if(rsp.status) {
        if(rsp.data = "true") {
          console.log("비밀번호 업데이트 성공: ", rsp.data);
        } else {
          console.log("통신은 성공, 비밀번호 업데이트 실패", rsp.data);
        }
      }
    } catch(error) {
      console.log("비밀번호 업데이트 실패: ", error);
    }
  }

  // 한줄 소개 수정
  const handleIntroChange = async () => {
    const intro = document.getElementByName("intro").value;
    try {
      const rsp = await MemberApi.introUpdate(userNum, intro, grantType, accessToken);
      if(rsp.status) {
        if(rsp.data = "true") {
          console.log("한 줄 소개 업데이트 성공: ", rsp.data);
        } else {
          console.log("통신은 성공, 한 줄 소개 업데이트 실패", rsp.data);
        }
      }
    } catch(error) {
      console.log("한줄소개 업데이트 실패: ", error);
    }
  }

  // 전화번호 변경
  const handlePhoneChange = async () => {
    const phone = document.getElementByName("phone").value;
    try {
      const rsp = await MemberApi.phoneUpdate(userNum, phone, grantType, accessToken);
      if (rsp.status) {
        if(rsp.data = "true") {
          console.log("전화번호 업데이트 성공: ", rsp.data);
        } else {
          console.log("통신은 성공, 전화번호 업데이트 실패", rsp.data);
        }
      }
    } catch (error) {
      console.log("전화번호 업데이트 실패: ", error);
    }
  };

  // memberInfo가 로딩 중일 때 표시할 로딩 스피너 등의 UI를 추가할 수 있습니다.
  if (!memberInfo) {
    return <div>회원 정보 로딩중...</div>;
  }

  return (
    <OutBox>
      <Header />
      <Container>
        <SideMenu />
        <Detail>
          <SelectBox>
            회원 정보
          </SelectBox>
          <ContentBox>
          <TitleBox>회원 정보 수정</TitleBox>
            <SpecificBox>
              <InfoType>프로필 이미지 수정</InfoType>

            </SpecificBox>
            <SpecificBox>
              <InfoType>회원 아이디</InfoType>
              <TextBox>{memberInfo.memberId}</TextBox>
            </SpecificBox>
            <SpecificBox>
              <InfoType>회원 비밀번호</InfoType>
              <GrayInput
                name="password"
                type="password"
                placeholder={"기존 비밀번호"}
              />
              <GrayInput
                name="newPassword"
                type="password"
                placeholder={"새로운 비밀번호(영문자, 숫자, 특수기호 포함 8자리 이상)"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  validatePassword(e.target.value);
                }}
              />
              <ValidationMessage isValid={isValidPassword}>
                {passwordValidationMessage}
              </ValidationMessage>
              <GrayInput
                name="newPasswordCheck"
                type="password"
                placeholder={"새로운 비밀번호 확인"}
                value={newPasswordCheck}
                onChange={handlePasswordCheckChange}
              />
              <ValidationMessage isValid={newPassword === newPasswordCheck}>
                {newPasswordCheckMessage}
              </ValidationMessage>
              <PhoneChangeButton
                disabled={newPassword !== newPasswordCheck}
                onClick={handlePasswordChange}
              >
                변경하기
              </PhoneChangeButton>
            </SpecificBox>


            <SpecificBox>
              <InfoType>한 줄 소개(255자 제한)</InfoType>
              <Introinput name="intro" type="text" defaultValue={memberInfo ? memberInfo.intro : ''}></Introinput>
              <IntroButton onClick={handleIntroChange}>변경하기</IntroButton>
            </SpecificBox>
            <SpecificBox>
              <InfoType>전화번호 변경(-포함하여 입력)</InfoType>
              <GrayInput name="phone" type="text" defaultValue={memberInfo ? memberInfo.phone : ''} />
              <PhoneChangeButton onClick={handlePhoneChange}>변경하기</PhoneChangeButton>
            </SpecificBox>
            <SpecificBox>

            </SpecificBox>
          </ContentBox>


        </Detail>
      </Container>
      <Footer />
      <ChatBot/>    
    </OutBox>  
  );
};
export default MyInformation;