import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.png";

const FindPwBlock = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 800px;
    background-color: white;

    .logo {
        margin-right: 250px;
        margin-top: 50px;
        margin-bottom: 200px;
        display: flex;
        align-items: center;
        margin-left: 320px;
    }

    .logo img {
        width: 200px;
        height: 190px;
    }

    .findpw p{
        text-align: center;
        margin-top: -400px;
        margin-left: 300px;
        font-size: 25px;
        color: #FFCFDA;
        font-weight: bold;
    }

    .pwBtn button {
        margin-left: 670px;
        font-size: 15px;
        margin-top: 50px;
        width: 150px;
        height: 30px;
        border: none;
        border-radius: 4px;
        background-color: #FFCFDA;
    }

    .hint {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        color: #999;
        margin-top: 10px;
        margin-left: 45px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 20px;

        .logo {
            margin-left: 75px;
            margin-bottom: 20px;
            margin-top: 40px;
        }

        .logo img {
            width: 200px;
            height: 180px;
        }

        .findpw p {
            font-size: 20px;
            margin-left: -30px;
            margin-top: -30px;
        }

        .inputId {
            margin-left: -510px;
        }

        .pwBtn button {
            margin-left: auto;
            margin-right: auto;
            display: block;
            font-size: 15px;
            margin-top: 30px;
            width: 150px;
            height: 30px;
        }

        .hint {
            margin-left: 0;
            margin-top: 10px;
        }
    }
    
`;


const Input = styled.input`
    margin-left: 545px;
    width: 400px; /* 원하는 너비 설정 */
    height: auto; /* 높이값 초기화 */
    line-height : normal; /* line-height 초기화 */
    padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
    border: 1px solid #999;
    border-radius: 18px; /* iSO 둥근모서리 제거 */
    outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;


const FindPw = () => {
    const navigate = useNavigate();

    // 아이디/비밀번호
    const [userID, setUserID] = useState("");

      // 유효성 검사
    const [idMsg, setIdMsg] = useState("");

    const [isID, setIsID] = useState("");


    const onClickLogo = () => {
        navigate('/');
    }

    const onChangeId = (e) => {
        const validateEmail = (email) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(email);
        };
        setUserID(e.target.value);
        if (!validateEmail(e.target.value)) {
          setIdMsg("이메일 형식으로 입력해주세요");
        } else {
          setIdMsg("올바른 형식입니다.");
        }
      };

    return(
        <FindPwBlock>

            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={onClickLogo}/>
            </div>
            
            <br/>

            <div className="findpw">
                <p>비밀번호 찾기를 위해 ID를 입력해 주세요.</p>
            </div>

            <div className="inputId">
                <Input type="email" placeholder="아이디(이메일)" value={userID} onChange={onChangeId}/>
            </div>

            <div className="hint">
                    {userID.length > 0 && (<span className={`message ${isID ? 'success' : 'error'}`}>{idMsg}</span>)}
            </div>


            <div className="pwBtn">
                <button>임시 비밀번호 발급</button>
            </div>
            

        </FindPwBlock>
    );
}

export default FindPw;