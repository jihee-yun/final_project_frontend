import React, { useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.png";

const LoginBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1500px;
    height: 800px;
    background-color: white;

    .elseLink1 {
        text-decoration: none;
        color: #FFCFDA;
        margin-left: 90px;
        font-size: 15px;
    }

    .elseLink2 {
        text-decoration: none;
        color: #FFCFDA;
        margin-left: 20px;
        transform: skew(-10deg);
        font-size: 15px;
    }

    .elseLink3 {
        text-decoration: none;
        color: #FFCFDA;
        margin-left: 20px;
        transform: skew(-10deg);
        font-size: 15px;
    }

    .logo {
        width : 200px;
        height: 150px;
        align-items: center;
        margin-left: 70px;
    }
    
    .item2{
        margin-top: 20px;
        justify-content: center;
        align-items: center;
    }

    .log_btn {
        width: 200px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #FFCFDA;
        margin-left: 150px;
        margin-bottom: 20px;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .pipe {
        margin: 10px; /* 파이프 양쪽에 여백 추가 */
        color: gray; /* 파이프 색상 설정 */
    }

    h5 {
        text-align: center;
        margin-top: 5px;
        color: #FFCFDA;
    }

`;

const LoginContainer = styled.div`
    padding: 50px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 4px 4px 2px rgba(0.1, 0.5, 0.5, 0.1);
`;



const Input = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  width: 400px; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height : normal; /* line-height 초기화 */
  padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 18px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;


const Login = () => {

    const navigate = useNavigate("");
    
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }

    const onChangePw = (e) => {
        const passwordCurrent = e.target.value;
        setInputPw(passwordCurrent);
    }

    const LogoClick = () => {
        navigate('/');
    }
    
    const LogClick = () => {
        navigate('/');
    }

    return(
        <LoginBlock>
            <LoginContainer>

            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
            </div>    
            
                    
                    <br/>

                    <div className="item2">
                        <Input placeholder="아이디(이메일)" value={inputId} onChange={onChangeId}/>
                    </div>

                    <div className="item2">
                        <Input type="password" placeholder="비밀번호" value={inputPw} onChange={onChangePw}/>
                    </div>

                    <div className="item2">
                        <button className="log_btn" onClick={LogoClick}>로그인</button>
                    </div>

                    <div className="else">
                        <Link to="/findpw" className="elseLink1">비밀번호 찾기</Link>
                        <span className="pipe">|</span>
                        <Link to="/findid" className="elseLink2">아이디 찾기</Link>
                        <span className="pipe">|</span>
                        <Link to="/signup" className="elseLink3">회원가입</Link>
                    </div>
                    <hr/>
                    <h5>OR</h5>
                    
            </LoginContainer>
        </LoginBlock>
    );
}

export default Login;