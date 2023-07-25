import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import AxiosApi from "../api/AxiosApi";
import MessageModal from "../component/MessageModal";


const FindPwBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-right: 30px;

  .logo {
    margin-bottom: 20px;
    img {
      cursor: pointer;
      width: 200px;
      height: 150px;
    }
  }

  h2 {
    font-size: 24px;
    margin-bottom: 50px;
    color: #FFCFDA;
    font-weight: bolder;
  }

  .loginWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .loginMain {
    display: flex;
    flex-direction: column;
  }

  .loginSmallBox {
    margin-bottom: 15px;
  }

  .loginInput {
    width: 350px;
    height: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  .loginButton {
    width: 250px;
    padding: 10px;
    background-color: #FFCFDA;
    margin-left: 60px;
    margin-top : 30px;
    font-weight: bolder;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .loginButton:hover {
    background-color: greenyellow;
  }

  .error-message {
    color: red;
    margin-top: 5px;
  }
`;

const FindPw = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);


  // 비밀번호 찾은 값 입력
  const [findPw, setFindPw] = useState("");

  // 팝업
  const [findPwSuccess, setFindPwSuccess] = useState(false);
  const [findPwFail, setFindPwFail] = useState(false);

  // 모달창 닫기
  const onClickClose = () => {
    setFindPwSuccess(false);
    setFindPwFail(false);
  }

  const onChangeVerifyCode = (e) => {
    setVerifyCode(e.target.value);
  };

  const onChangeUserId = (e) => {
    const userIdNow = e.target.value;
    setUserId(userIdNow);
  }

  const onChangeEmail = (e) => {
    const emailNow = e.target.value;
    setEmail(emailNow);
  }

  const onClickSendCode = async () => {
    try {
      const response = await AxiosApi.verifyCodeEmailSend(email);
      if (response.data.success) {
        setIsCodeSent(true);
        // 서버로부터 인증번호 전송 성공
        console.log('서버로부터 인증번호 전송 성공');
      } else {
        // 서버로부터 인증번호 전송 실패
        console.log('서버로부터 인증번호 전송 실패');
      }
    } catch (error) {
      // 예외 처리
      console.error('인증번호 전송 오류:', error);
    }
  };

  // const onClickVerifyCode = async () => {
  //   try {
  //     // 서버로 입력받은 인증번호와 함께 검증 요청
  //     const response = await AxiosApi.verifyVerificationCode(email, verifyCode);
  //     if (response.data.success) {
  //       // 인증번호 검증 성공
  //       setIsCodeVerified(true);
  //       console.log("인증번호 검증 성공");
  //     } else {
  //       // 인증번호 검증 실패
  //       console.log("인증번호 검증 실패");
  //     }
  //   } catch (error) {
  //     console.log("인증번호 검증 오류:", error);
  //   }
  // };

  // 아이디, 이메일 Axios
  const onClickFindPw = async() => {
    try {
      const rsp = await AxiosApi.findPw(userId, email);
      if(rsp) {
        setFindPw(rsp.data);
        setFindPwSuccess(true);
        console.log(rsp.data);
      } else {
        setFindPwFail(true);
        console.log(rsp.data);
      }
    }catch(e) {
      console.log("일치하는 회원정보가 없습니다.");
      console.log(e);
    }
  }

  const handleOnKeyPress = (e) => {
    if(e.key === 'Enter') {
      onClickFindPw();
    }
  }


  const onClickLogo = () => {
    navigate('/');
  }

  return (
      <FindPwBlock>
      <div className="logo">
        <img src={logo} alt="logo" onClick={onClickLogo} />
      </div>

      <h2>비밀번호 찾기</h2>

      <div className="loginWrapper">
          <div className="loginMain">
            <div className="loginSmallBox">
              <input
                type="text"
                value={userId}
                className="loginInput"
                placeholder="아이디"
                onChange={onChangeUserId}
                onKeyUp={handleOnKeyPress}
              />
            </div>
            <div className="loginSmallBox">
              <input
                type="text"
                value={email}
                className="loginInput"
                placeholder="이메일"
                onChange={onChangeEmail}
                onKeyUp={handleOnKeyPress}
              />
            </div>
            {!isCodeSent ? (
            <button className="loginButton" onClick={onClickSendCode}>
              인증번호 전송
            </button>
          ) : (
            <>
              <div className="loginSmallBox">
                <input
                  type="text"
                  value={verifyCode}
                  className="loginInput"
                  placeholder="인증번호 입력"
                  onChange={onChangeVerifyCode}
                  onKeyUp={handleOnKeyPress}
                />
              </div>
              <button className="loginButton" onClick={onClickSendCode}>
                인증번호 확인
              </button>
            </>
          )}
          {isCodeVerified && (
            <button className="loginButton" onClick={onClickFindPw}>
              비밀번호 찾기
            </button>
          )}
          {findPwFail && <div className="error-message">일치하는 회원정보가 없습니다.</div>}
        </div>
      </div>
      {findPwSuccess && (<MessageModal open={findPwSuccess} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">회원님의 이메일로 비밀번호가 발송 되었습니다.</MessageModal>)}
      {findPwFail && (<MessageModal open={findPwFail} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">일치하는 회원 정보가 없습니다.</MessageModal>)}
      {/* {findPwSuccess && (<MessageModal open={findPwSuccess} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">비밀번호 찾기 결과 : {findPw}</MessageModal>)}
        {findPwFail && (<MessageModal open={findPwFail} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">아이디를 찾을 수 없습니다.</MessageModal>)} */}

    </FindPwBlock>

      

  );
}

export default FindPw;