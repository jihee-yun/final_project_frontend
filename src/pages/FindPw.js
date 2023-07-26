import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AxiosApi from "../api/AxiosApi";
import MessageModal from "../component/MessageModal";
import Header from "../component/Header";
import Footer from "../component/Footer";


const FindPwBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [findPwSuccess, setFindPwSuccess] = useState(false);
  const [findPwFail, setFindPwFail] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onClickFindPw = async () => {
    try {
      const response = await AxiosApi.findPw(email, phone, name);
      if (response.data.success) {
        setFindPwSuccess(true);
        console.log("인증메일 발송 성공!");
      } else {
        setFindPwFail(true);
        console.log("일치하는 회원정보가 없습니다.");
      }
    } catch (e) {
      console.log("비밀번호 찾기 오류:", e);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await AxiosApi.verifyCode(email, verificationCode); // 서버로 인증코드 확인 요청

      if (response.data.success) {
        // 인증코드 확인 성공
        setIsCodeVerified(true);
        console.log("인증코드 확인 성공!");
      } else {
        // 인증코드 확인 실패
        setIsCodeVerified(false);
        console.log("인증코드 확인 실패!");
      }
    } catch (e) {
      console.log("인증코드 확인 오류:", e);
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await AxiosApi.changePassword(email, newPassword); // 서버로 새로운 비밀번호 전송 요청

      if (response.data.success) {
        // 비밀번호 변경 성공
        console.log("새로운 비밀번호로 변경되었습니다!");
        // ... (추가적인 처리 혹은 화면 전환 등)
      } else {
        // 비밀번호 변경 실패
        console.log("비밀번호 변경 실패!");
      }
    } catch (e) {
      console.log("비밀번호 변경 오류:", e);
    }
  };

  const onClickClose = () => {
    setFindPwSuccess(false);
    setFindPwFail(false);
    setIsCodeVerified(false);
    setVerificationCode("");
    setNewPassword("");
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
              />
            </div>

            <div className="loginSmallBox">
              <input
                type="text"
                value={phone}
                className="loginInput"
                placeholder="전화번호"
                onChange={onChangePhoneNumber}
              />
            </div>

            <div className="loginSmallBox">
              <input
                type="text"
                value={name}
                className="loginInput"
                placeholder="이름"
                onChange={onChangeName}
              />
            </div>

            {/* 비밀번호 찾기 버튼 */}
            <button className="loginButton" onClick={onClickFindPw}>
              비밀번호 찾기
            </button>

            {/* 인증메일 발송 성공 후, 인증코드 입력란 */}
            {findPwSuccess && !isCodeVerified && (
              <div>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="인증코드를 입력하세요"
                />
                <button onClick={handleVerifyCode}>인증코드 확인</button>
              </div>
            )}

            {/* 인증코드 확인 성공 후, 새로운 비밀번호 입력란 */}
            {findPwSuccess && isCodeVerified && (
              <div>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새로운 비밀번호를 입력하세요"
                />
                <button onClick={handleChangePassword}>비밀번호 변경</button>
              </div>
            )}
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
          인증번호가 이메일로 발송되었습니다.
        </MessageModal>
      )}

      {findPwFail && (
        <MessageModal
          open={findPwSuccess}
          confirm={onClickClose}
          close={onClickClose}
          type="modalType"
          header="SweetKingdom"
        >
          일치하는 회원정보가 없습니다.
        </MessageModal>
      )}
      </FindPwBlock>
        <Footer />
      </>
    );
  };
  
export default FindPw;