import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AxiosApi from "../api/AxiosApi";
import MessageModal from "../component/MessageModal";
import Header from "../component/Header";
import Footer from "../component/Footer";



const FindPwBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-right: 30px;

  h2 {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 20px;
    font-weight: bold;
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
    width: 200px;
    height: 40px;
    margin-top: 20px;
    margin-left: 90px;
    background-color: #FFCFDA;
    font-size: .9rem;
    font-weight: bold;
    color: #585858;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  .error-message {
    color: red;
    margin-top: 5px;
  }
`;

const FindPw = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [findPwSuccess, setFindPwSuccess] = useState(false);
  const [findPwFail, setFindPwFail] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const [findPw, setFindPw] = useState("");

  const onChangeEmail = (e) => {
    const emailNow = e.target.value;
    setEmail(emailNow);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberNow = e.target.value;
    setPhoneNumber(phoneNumberNow);
  };

  const onChangeName = (e) => {
    const nameNow = e.target.value;
    setName(nameNow);
  };

  const onClickSendCode = async () => {
    try {
      const response = await AxiosApi.sendVerificationCode(email, phoneNumber, name);
      if (response.data.success) {
        setIsCodeSent(true);
        console.log("서버로부터 인증 성공");
      } else {
        console.log("서버로부터 인증 실패");
      }
    } catch (error) {
      console.error("인증 요청 오류:", error);
    }
  };

  const onClickFindPw = async () => {
    try {
      const response = await AxiosApi.findPw(email, phoneNumber, name);
      if (response.data.success) {
        setFindPwSuccess(true);
        setFindPw(response.data.password); // 서버에서 받아온 비밀번호를 저장 (비밀번호 찾기 성공 시에만)
        console.log("비밀번호 찾기 성공:", response.data.password);
      } else {
        setFindPwFail(true);
        console.log("일치하는 회원정보가 없습니다.");
      }
    } catch (e) {
      console.log("비밀번호 찾기 오류:", e);
    }
  };

  const onChangeVerifyCode = (e) => {
    const codeNow = e.target.value;
    setVerificationCode(codeNow);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickFindPw();
    }
  };

  const onClickClose = () => {
    setFindPwSuccess(false);
    setFindPwFail(false);
  };
  
    return (
      <>
        <Header />
        <FindPwBlock>
        <h2>비밀번호 찾기</h2>
        <div className="loginWrapper">
          <div className="loginMain">
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

            <div className="loginSmallBox">
              <input
                type="text"
                value={phoneNumber}
                className="loginInput"
                placeholder="전화번호"
                onChange={onChangePhoneNumber}
                onKeyUp={handleOnKeyPress}
              />
            </div>

            <div className="loginSmallBox">
              <input
                type="text"
                value={name}
                className="loginInput"
                placeholder="이름"
                onChange={onChangeName}
                onKeyUp={handleOnKeyPress}
              />
            </div>

            {isCodeSent ? (
              <>
                <div className="loginSmallBox">
                  <input
                    type="text"
                    className="loginInput"
                    placeholder="인증번호 입력"
                    onChange={onChangeVerifyCode}
                    onKeyUp={handleOnKeyPress}
                  />
                </div>
                <button className="loginButton" onClick={onClickFindPw}>
                  인증번호 확인
                </button>
              </>
            ) : (
              <button className="loginButton" onClick={onClickSendCode}>
                비밀번호 찾기
              </button>
            )}
            {findPwFail && <div className="error-message">일치하는 회원정보가 없습니다.</div>}
          </div>
        </div>
        {/* MessageModal 컴포넌트 등록 */}
        {findPwSuccess && (
          <MessageModal
            open={findPwSuccess}
            confirm={onClickClose}
            close={onClickClose}
            type="modalType"
            header="SweetKingdom"
          >
            비밀번호 찾기 : {findPw}
          </MessageModal>
        )}
        {findPwFail && (
          <MessageModal
            open={findPwFail}
            confirm={onClickClose}
            close={onClickClose}
            type="modalType"
            header="SweetKingdom"
          >
            일치하는 회원 정보가 없습니다.
          </MessageModal>
        )}
      </FindPwBlock>
        <Footer />
      </>
    );
  };
  
export default FindPw;