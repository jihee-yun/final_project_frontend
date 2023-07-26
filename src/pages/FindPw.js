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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const [findPwSuccess, setFindPwSuccess] = useState(false);
  const [findPwFail, setFindPwFail] = useState(false);
  const [findPw, setFindPw] = useState("");

  const onChangeEmail = (e) => {
    const emailNow = e.target.value;
    setEmail(emailNow);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberNow = e.target.value;
    setPhone(phoneNumberNow);
  };

  const onChangeName = (e) => {
    const nameNow = e.target.value;
    setName(nameNow);
  };

  const generateRandomPassword = () => {
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Characters to use
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  const onClickFindPw = async () => {
    try {
      const response = await AxiosApi.findPw(email, phone, name); 
      if (response.data.success) {
        setFindPwSuccess(true);
        const temporaryPassword = generateRandomPassword();
        setFindPw(temporaryPassword); 
        console.log("임시 비밀번호:", temporaryPassword);
      } else {
        setFindPwFail(true);
        console.log("일치하는 회원정보가 없습니다.");
      }
    } catch (e) {
      console.log("비밀번호 찾기 오류:", e);
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

            <button className="loginButton" onClick={onClickFindPw}>
              비밀번호 찾기
            </button>
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