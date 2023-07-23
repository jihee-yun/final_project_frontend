import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png";
import AxiosApi from "./Api/AxiosApi";


const FindPwBlock = styled.div`
  .logo {
    width: 200px;
    height: 150px;
    img {
      cursor: pointer;
    }
  }

  .wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding-top: 30px;
  }

  .findPwdWrapper {
    width: 500px;
    height: 480px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .findPwd h2 {
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    margin-bottom: 40px;
  }

  .findPwdId,
  .findPwdEmail,
  .findPwdCodeInput {
    width: 90%;
    height: 48px;
    padding: 0 14px;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    outline: none;
  }

  .findPwdCodeBtn,
  .pwdSearchOkBtn,
  .pwdSearchNotBtn {
    width: 95%;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
  }

  .findPwdCodeBtn {
    background-color: ${(props) => (props.isFindPwdId && props.isFindPwdEmail) ? '#8679d9' : 'rgb(184, 184, 184)'};
    color: #ffffff;
  }

  .pwdSearchOkBtn {
    background-color: ${(props) => props.isFindPwdVerifyCode ? '#8679d9' : 'rgb(184, 184, 184)'};
    color: #ffffff;
  }

  .pwdSearchNotBtn {
    background-color: rgb(184, 184, 184);
    color: #ffffff;
    cursor: default;
  }
  

  .findPwdErrMsg {
    text-align: left;
    margin-left: 10px;
    font-size: 13px;
    color: rgb(156, 156, 156);
    margin-bottom: 20px;
}

  .findPwdIdOk,
  .findPwdEmailOk,
  .findPwdBtnOk {
    color: green;
  }

  .findPwdIdErr,
  .findPwdEmailErr,
  .findPwdBtnErr {
    color: red;
  }
`;

const ResetPwd = styled.div`
  /* ResetPwd 컴포넌트 스타일 추가 */
  .resetPwdWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 250px;
    padding-top: 150px;
  }

  .resetPwd {
    width: 400px;
    height: 600px;
    margin: 20px;
    h2 {
      text-align: center;
      font-size: 40px;
      margin-bottom: 40px;
    }
  }

  .resetPwdMain {
    padding-top: 20px;
  }

  .resetPwdSmallBox {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .resetPwdInput {
    width: 100%;
    height: 48px;
    padding: 0 14px;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    outline: none;
  }

  .resetPwdErrMsg {
    text-align: right;
    font-size: 12px;
    color: rgb(156, 156, 156);
    margin-bottom: 10px;
  }

  .resetPwdNotCompleteBut,
  .resetPwdCompleteBut {
    width: 100%;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
  }

  .resetPwdNotCompleteBut {
    background-color: rgb(184, 184, 184);
    color: #ffffff;
  }

  .resetPwdCompleteBut {
    background-color: #8679d9;
    color: #ffffff;
  }

  .resetPwdCompleteDt {
    text-align: center;
    font-size: 1.4em;
  }

  .resetPwdLoginBtn {
    text-align: center;
    padding: 100px;

    button {
      width: 70%;
      height: 46px;
      border: none;
      background-color: #8679d9;
      color: #fff;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const FindPwdCodeButton = styled.button`
  width: 95%;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.isFindPwdId && props.isFindPwdEmail ? '#8679d9' : 'rgb(184, 184, 184)'};
  color: #ffffff;
`;

const ConfirmButtonWrapper = styled.div`
  margin-top: -10px; /* 원하는 만큼 음수 값을 주어 버튼을 위로 올립니다 */
`;



const FindPw = () => {
    const navigate = useNavigate();

//재설정 페이지 유효성
const [changeResetPwd, setChangeResetPwd] = useState(false);

const [findPwdId, setFindPwdId] = useState('');
const [findPwdEmail, setFindPwdEmail] = useState('');
const [findPwdCodeInput, setFindPwdCodeInput] = useState('');
const [findPwdServerCode, setFindPwdServerCode] = useState('');

const [isFindPwdId, setIsFindPwdId] = useState(false);
const [isFindPwdEmail, setIsFindPwdEmail] = useState(false); 
//확인 버튼 유효성
const [isFindPwdVerifyCode, setIsFindPwdVerifyCode] = useState(false);
//확인 에러 메시지 유효성
const [isFindPwdBtnErr, setIsFindPwdBtnErr] = useState(false);

//에러 메시지
const [findPwdIdOkMsg, setFindPwdIdOkMsg] = useState('');
const [findPwdIdMsg, setFindPwdIdMsg] = useState('');

const [findPwdEmailOkMsg, setFindPwdEmailOkMsg] = useState('');
const [findPwdEmailMsg, setFindPwdEmailMsg] = useState('');

const [findPwdBtnErrMsg, setFindPwdBtnErrMsg] = useState('');
const [findPwdBtnOkMsg, setFindPwdBtnOkMsg] = useState('');

//정규식
const idRegEx = /^[A-za-z0-9]{3,15}$/g; 
const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const CodeRegEx = /^[0-9]+$/;

const onChangeFindPwdId = (e) => {
  const inputFindPwdId = e.target.value;
  setFindPwdId(inputFindPwdId);
  if(inputFindPwdId.length === 0) {
    setIsFindPwdId(false);
    setFindPwdIdMsg("가입 시 등록한 아이디를 입력해주세요.");
  } else if(!idRegEx.test(inputFindPwdId)) {
    setIsFindPwdId(false);
    setFindPwdIdMsg("아이디 형식에 맞지 않습니다.");
  } else {
    setIsFindPwdId(true);
    setFindPwdIdOkMsg("");
  };
}

const onChangeFindPwdEmail = (e) => {
  const inputFindPwdEmail = e.target.value;
  setFindPwdEmail(inputFindPwdEmail);
  if(inputFindPwdEmail.length === 0) {
    setIsFindPwdEmail(false);
    setFindPwdEmailMsg("가입 시 등록한 이메일주소를 입력해주세요.")
  } else if(!emailRegEx.test(inputFindPwdEmail)) {
    setIsFindPwdEmail(false);
    setFindPwdEmailMsg("이메일 형식에 맞지 않습니다.");
  } else {
    setIsFindPwdEmail(true);
    setFindPwdEmailOkMsg("올바른 형식입니다.");
  };
}

//인증번호 받기 버튼
const onClickFindPwdCode = () => {
  const findPwdCodeInput = document.getElementById('findPwdCodeInput');
  const idEmailFetchData = async () => {
    try {
      const response = await AxiosApi.findPw(findPwdId, findPwdEmail);
      if(response.data === true) {                  
        const emailfetchData = async () => {
          try {
            const emailRes = await AxiosApi.verifyCodeEmailSend(findPwdEmail);
            // console.log(emailRes.data);
            setFindPwdServerCode(emailRes.data);              
            if(emailRes.data){
              findPwdCodeInput.style.display = 'block';
              setIsFindPwdEmail(true);
              setFindPwdEmailOkMsg("가입하신 이메일로 인증번호를 보내드렸습니다.")                               
            } else {
              setIsFindPwdEmail(false);
              setFindPwdEmailMsg("인증번호 전송에 실패했습니다.")
            }                
          } catch (e) {
            console.log(e)
          }
        }
        emailfetchData();
      } else if(response.data === false) {
        setIsFindPwdEmail(false);
        setFindPwdEmailMsg("가입하신 이름과 이메일을 찾을 수 없습니다.")
      }
    } catch (e) {
        console.log(e);        
    }
  }
  idEmailFetchData();
}


const onChangeFindPwdCodeInput = (e) => {
  const findPwdCodeInput = e.target.value;
  setFindPwdCodeInput(findPwdCodeInput);
  if(CodeRegEx.test(findPwdCodeInput)) {
    setIsFindPwdVerifyCode(true);
  } else {
    setIsFindPwdVerifyCode(false);
  }
}

//확인 버튼
const onClickFindPwdOkBtn = () => {   
  // if(isFindPwdVerifyCode) navigate('/resetpwd');
  if(findPwdCodeInput === findPwdServerCode) {
    setChangeResetPwd(true);
  } else {
    setIsFindPwdVerifyCode(false);
    setIsFindPwdBtnErr(false);
    setFindPwdBtnErrMsg("인증번호가 일치하지 않습니다.");
  }
}

const onClickLogo = () => {
    navigate('/');
}
    return(
        <FindPwBlock>
        <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={onClickLogo}/>
            </div>
        <div className="wrapper">
            <div className="findPwdWrapper">
            <div className="findPwd">
                {changeResetPwd && <ResetPwd findPwdId={findPwdId} />}
                {!changeResetPwd && (
                <>
                    <h2>비밀번호 찾기</h2>
                    <div className="findPwdMain">
                    <div className="findPwdSmallBox">
                        <input
                        type="text"
                        value={findPwdId}
                        className="findPwdId"
                        placeholder="아이디"
                        onChange={onChangeFindPwdId}
                        ></input>
                    </div>
                    <div className="findPwdErrMsg">
                        {!isFindPwdId && (
                        <span className="findPwdIdErr">{findPwdIdMsg}</span>
                        )}
                        {isFindPwdId && (
                        <span className="findPwdIdOk">{findPwdIdOkMsg}</span>
                        )}
                    </div>
                    <div className="findPwdSmallBox">
                        <input
                        type="text"
                        value={findPwdEmail}
                        className="findPwdEmail"
                        placeholder="이메일 주소"
                        onChange={onChangeFindPwdEmail}
                        ></input>
                    </div>
                    <div className="findPwdErrMsg">
                        {!isFindPwdEmail && (
                        <span className="findPwdEmailErr">{findPwdEmailMsg}</span>
                        )}
                        {isFindPwdEmail && (
                        <span className="findPwdEmailOk">{findPwdEmailOkMsg}</span>
                        )}
                    </div>
                    <FindPwdCodeButton
                            id="findPwdCodeBtn"
                            isFindPwdId={isFindPwdId}
                            isFindPwdEmail={isFindPwdEmail}
                            onClick={onClickFindPwdCode}
                            >
                            인증번호 받기
                        </FindPwdCodeButton>
                    <div className="findPwdSmallBox">
                        <input
                        type="text"
                        value={findPwdCodeInput}
                        id="findPwdCodeInput"
                        className="findPwdCodeInput"
                        placeholder="인증번호 입력"
                        style={{ display: 'none' }}
                        onChange={onChangeFindPwdCodeInput}
                        ></input>
                    </div>

                    <div className="findPwdErrMsg">
                        {!isFindPwdBtnErr && (
                        <span className="findPwdBtnErr">{findPwdBtnErrMsg}</span>
                        )}
                        {isFindPwdBtnErr && (
                        <span className="findPwdBtnOk">{findPwdBtnOkMsg}</span>
                        )}
                    </div>
                    </div>
                    <div>
                    <ConfirmButtonWrapper>
                        <button
                            id="pwdSearchButton"
                            className={isFindPwdVerifyCode ? 'pwdSearchOkBtn' : 'pwdSearchNotBtn'}
                            onClick={onClickFindPwdOkBtn}
                        >
                            확인
                        </button>
                        </ConfirmButtonWrapper>
                    </div>
                </>
                )}
            </div>
            </div>
        </div>
        </FindPwBlock>

    );
}

export default FindPw;