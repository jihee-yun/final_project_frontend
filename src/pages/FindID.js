import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import AxiosApi from "../api/AxiosApi";

const FindIdBlock = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;

    .logo {
        width: 200px;
        height: 150px;
        margin-top: 10px;
        margin-left: 10px;
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

  .findIdWrapper {
    width: 400px;
    height: 400px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  .findId {
    h2 {
      text-align: center;
      font-size: 40px;
      margin-bottom: 40px;
    }
  }

  .findIdSmallBox {
    width : 90%;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .findIdName,
  .findIdEmail {
    /* 스타일 변경 없음 */
    border: 1px solid #d4d4d4;
    border-radius: 10px;
    display: block;
    width: 100%;
    height: 48px;
    padding: 0 14px;
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    outline: none;
  }

  .findIdErrMsg {
    /* 스타일 변경 없음 */
    text-align: left;
    margin-left: 10px;
    font-size: 12px;
    color: rgb(156, 156, 156);
    margin-bottom: 10px;
  }

  .findIdNameOk,
  .findIdEmailOk {
    /* 추가적인 스타일을 적용하려면 여기에 작성 */
    color: #1a1a1a;
    font-weight: bold;
  }

  .findIdNameErr,
  .findIdEmailErr {
    /* 추가적인 스타일을 적용하려면 여기에 작성 */
    color: #ff4242;
    font-weight: bold;
  }

  .findIdComplete button {
    width: 250px;
    height: 50px;
    margin-top: 50px;
  }

  .findIdNotCompleteBut {
    /* 추가적인 스타일을 적용하려면 여기에 작성 */
    background-color: #b8b8b8;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
  }

  .findIdCompleteBut {
    /* 추가적인 스타일을 적용하려면 여기에 작성 */
    background-color: #8679d9;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
  }

`;

const FindIdComplete = styled.div`
    .findIdCompleteMain {
        margin-top: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }
    .findIdCompleteDt {
        line-height: 24px;
        margin: 40px;
        text-align: center;
        font-size: 18px;
    }
    .findIdCompleteLogin {
        display: inline-flex;
        width: 100%;
        justify-content: center;
        margin-top: 40px;

    button {
        width: 200px;
        height: 46px;
        background-color: #8679D9;
        border: none;
        color: white;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
    }
}
`

const FindID = () => {
    const navigate = useNavigate("");

    const [changeFindIdComplete, setChangeFindIdComplete] = useState(false);

    const [findIdName, setFindIdName] = useState('');
    const [findIdEmail, setFindIdEmail] = useState('');
  
    const [isFindIdName, setIsFindIdName] = useState(false);
    const [isFindIdEmail, setIsFindIdEmail] = useState(false);
  
    //에러 메시지
    const [findIdNameOkMsg, setFindIdNameOkMsg] = useState('');
    const [findIdNameMsg, setFindIdNameMsg] = useState('');
  
    const [findIdEmailOkMsg, setFindIdEmailOkMsg] = useState('');
    const [findIdEmailMsg, setFindIdEmailMsg] = useState('');
  
    //정규식
    const nameRegEx = /^[가-힣|a-z|A-Z|]+$/;
    const emailRegEx = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
    const onChangeFindIdName = (e) => {
      const inputFindIdName = e.target.value;
      setFindIdName(inputFindIdName);
      if(inputFindIdName.length === 0) {
        setIsFindIdName(false);
        setFindIdNameMsg("가입 시 등록한 이름을 입력해주세요.")
      } else if(!nameRegEx.test(inputFindIdName) && !(inputFindIdName.length === 0)) {
        setIsFindIdName(false);
        setFindIdNameMsg("이름 형식에 맞지 않습니다.")
      } else {
        setIsFindIdName(true);
        setFindIdNameMsg("");
      }
    }
  
    const onChangeFindIdEmail = (e) => {
      const inputFindIdEmail = e.target.value;
      setFindIdEmail(inputFindIdEmail);
      if(inputFindIdEmail.length === 0) {
        setIsFindIdEmail(false);
        setFindIdEmailMsg("가입 시 등록한 이메일을 입력해주세요.")
      } else if(!emailRegEx.test(inputFindIdEmail) && !(inputFindIdEmail.length === 0)) {
        setIsFindIdEmail(false);
        setFindIdEmailMsg("이메일 형식에 맞지 않습니다.")
      } else {
        setIsFindIdEmail(true);
        setFindIdEmailMsg("올바른 형식입니다.");
      }
    }
  
    //아이디 찾기 완료 버튼
    const onClickFindIdComplete = () => {
      const fetchData = async () => {
        try {
          const response = await AxiosApi.findId(findIdName, findIdEmail);
          console.log("Response:", response.data);
          if(response.data === true) {
            setChangeFindIdComplete(true);
          } else if(response.data === false){
            // setIsFindIdEmail(false);
            setFindIdEmailMsg("가입하신 이름과 이메일을 찾을 수 없습니다.")
            setChangeFindIdComplete(false);         
          }
        } catch (e) {
          console.log(e);
        }    
      }
      fetchData();    
    }

    const LogoClick = () => {
        navigate('/');
    }

    return(
        <FindIdBlock>
            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
            </div>

                    <div className="wrapper">
            <div className="findIdWrapper">
                <div className="findId">
                <h2>아이디 찾기</h2>
                <div className="findIdMain">
                    {changeFindIdComplete &&
                    <FindIdComplete 
                    findIdEmail={findIdEmail}
                    />
                    }              
                    {!changeFindIdComplete &&
                    <>
                <div className="findIdSmallBox">           
                    <input type="text" value={findIdName} className="findIdName" placeholder="이름"
                    onChange={onChangeFindIdName}></input> 
                    </div>
                <div className="findIdErrMsg">
                    {!isFindIdName && <span className="findIdNameErr">{findIdNameMsg}</span>}
                    {isFindIdName && <span className="findIdNameOk">{findIdNameOkMsg}</span>}
                    </div>
                <div className="findIdSmallBox">
                    <input type="text" value={findIdEmail} className="findIdEmail" placeholder="이메일"
                    onChange={onChangeFindIdEmail}></input>
                </div> 
                <div className="findIdErrMsg">
                    {!isFindIdEmail && <span className="findIdEmailErr">{findIdEmailMsg}</span>}
                    {isFindIdEmail && <span className="findIdEmailOk">{findIdEmailOkMsg}</span>}
                    {!changeFindIdComplete && isFindIdEmail && <span className="findIdEmailOk">{findIdEmailMsg}</span>}
                </div>              
                <div className="findIdComplete">
                    {!(isFindIdName && isFindIdEmail)
                    && <button className="findIdNotCompleteBut">확인</button>}  

                    {(isFindIdName && isFindIdEmail)
                    && <button className="findIdCompleteBut" 
                    onClick={onClickFindIdComplete}>확인</button>}  
                </div>
                    </>
                    }

                </div>
                </div>
            </div>
            </div>
    </FindIdBlock>
    );
}

export default FindID;