import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";
import AxiosApi from "../api/AxiosApi";
import MessageModal from "../component/MessageModal";

const FindIdBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .logo {
    width: 200px;
    height: 150px;
    margin-bottom: 120px;
    img {
      cursor: pointer;
    }
  }

  input {
    width: 350px;
    height: 30px;
    margin-bottom: 30px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }

  h2 {
    margin-bottom: 80px;
    margin-top : -100px;
    color: #FFCFDA;
    font-size: 25px;
  }

  button {
    width: 200px;
    height: 40px;
    margin-top: 20px;
    background-color: #FFCFDA;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .modal-header {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #FFCFDA;
  }

  .modal-heading {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .modal-message {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .close-btn {
    padding: 8px 16px;
    background-color: #FFCFDA;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const FindID = () => {
    const navigate = useNavigate("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // 팝업
    const [findIdSuccess, setFindIdSuccess] = useState(false);
    const [findIdFail, setFindIdFail] = useState(false);

    // 모달창 닫기
    const onClickClose = () => {
      setFindIdSuccess(false);
      setFindIdFail(false);
    }

    // 아이다 찾은 값 입력
    const [findId, setFindId] = useState("");

    const onChangeName = (e) => {
      const nameNow = e.target.value;
      setName(nameNow);
    }

    const onChangeEmail = (e) => {
      const emailNow = e.target.value;
      setEmail(emailNow);
    }

    // 이름과 메일 입력 값을 Axios
    const onClickFindId = async() => {
      try {
        const rsp = await AxiosApi.findId(name, email);
        if(rsp) {
          setFindId(rsp.data);
          setFindIdSuccess(true);
          console.log(rsp.data);
        }
      }catch(e) {
        console.log("일치하는 회원정보가 없습니다.");
        setFindIdFail(true);
      }
    }

    const handleOnKeyPress = (e) => {
      if(e.key === 'Enter') {
        onClickFindId();
      }
    }


    const LogoClick = () => {
        navigate('/');
    }

    return(
        <FindIdBlock>
            <div className="logo">
                <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
            </div>

            <h2>아이디 찾기</h2>

            <input
              type="text"
              value={name}
              placeholder="이름"
              onChange={onChangeName}
            />
          <input
            type="text"
            value={email}
            placeholder="이메일 주소"
            onChange={onChangeEmail}
            onKeyPress={handleOnKeyPress}
          />
          <button onClick={onClickFindId}>아이디 찾기</button>

        {findIdSuccess && (<MessageModal open={findIdSuccess} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">아이디 찾기 결과 : {findId}</MessageModal>)}
        {findIdFail && (<MessageModal open={findIdFail} confirm={onClickClose} close={onClickClose} type="modalType" header="SweetKingdom">아이디를 찾을 수 없습니다.</MessageModal>)}

      </FindIdBlock>
    );
}

export default FindID;