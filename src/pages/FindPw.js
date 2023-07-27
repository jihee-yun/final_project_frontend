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
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onClickFindPw = async () => {
    try {
      const response = await AxiosApi.findPw(email, phone, name);
      if (response.data.success) {
        setFindPwSuccess(true);  // 인증 코드 입력란 표시를 위해 상태 변경
        setFindPwFail(false);
        console.log("인증메일 발송 성공!");
        mailConfirm();
      } else {
        setFindPwSuccess(false);
        setFindPwFail(true);
        console.log("일치하는 회원정보가 없습니다.");
      }
    } catch (e) {
      console.log("비밀번호 찾기 오류:", e);
    }
  };

  const mailConfirm = async () => {
    try {
      const response = await AxiosApi.emailCheck(email);
      if (response.data.success) {
        console.log("인증 메일이 성공적으로 발송되었습니다!");
        // 인증 메일 발송 후, 인증코드 입력란을 표시하도록 상태를 변경할 수 있습니다.
        setIsCodeVerified(true); // 예시로 인증코드 입력란 표시를 위해 setIsCodeVerified(true)로 설정
      } else {
        console.log("인증 메일 발송에 실패했습니다.");
        // 오류 메시지를 사용자에게 보여줄 수도 있습니다.
      }
    } catch (error) {
      console.log("인증 메일 발송 오류:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await AxiosApi.codeCheck(email, code);
      if (response.data.success) {
        console.log("인증코드 확인 성공!");
        // 인증 코드 확인 후, 비밀번호 변경 API 호출
        await AxiosApi.changePassword(email, newPassword);
        console.log("새로운 비밀번호로 변경되었습니다!");
      } else {
        console.log("인증코드 확인 실패!");
      }
    } catch (error) {
      console.log("인증코드 확인 오류:", error);
    }
  };

  const onClickClose = () => {
    setFindPwSuccess(false);
    setFindPwFail(false);
    setIsCodeVerified(false);
    setCode("");
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
                onChange={onChangePhone}
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
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
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
                <button onClick={handleVerifyCode}>비밀번호 변경</button>
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
          open={findPwFail} 
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