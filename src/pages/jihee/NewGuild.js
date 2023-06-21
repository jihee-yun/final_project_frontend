import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logo.png";
import warning from "./images/warning.png";


const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #FAFAFA;

  .content{
    width: 80%;
    margin: 0 auto;
  }

  img{
    width: 100px;
    height: 100px;
    margin: 20px 0;
    cursor: pointer;
  }

  .box1{
    display: flex;
    align-items: center;

    img{
      margin: 0;
      width: 20px;
      height: 20px;
    }

    h5{
      margin: 0;
      padding-left: 5px;
    }
  }

  .item{
    li{
      font-size: .7rem;
      margin: 10px 0 10px 25px;
    }
  }

  .button-box {
    display: flex;
    justify-content: center;
    width: 100%;

    button{
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 30px;
    background-color: #FFCFDA;
    margin-bottom: 50px;
    font-size: .9rem;
    font-weight: bold;
    color: #585858;
    &:hover{
      color: white;
    }
    }
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  height: 30px;
  background-color: rgba(255, 207, 218, 0.5);
`;

const Detail = styled.textarea`
  border: none;
  border-radius: 10px;
  outline: none;
  resize: none;
  width: 100%;
  height: 300px;
  background-color: rgba(255, 207, 218, 0.5);
  margin-top: 30px;
`;

const NewGuild = () => {
  return(
    <>
    <Container>
    <div className="content">
    <Link to="/guild" style={{ textDecoration: "none", color: "inherit"}}><img src={logo} alt="스위트킹덤로고" /></Link>
    <h3>새로운 길드 생성을 위해 몇가지 질문을 드릴게요</h3>
    <br /><br /><br /><br /><br />
    <div className="item">
      <h4>지역을 입력해볼까요?</h4>
      <Input></Input>
    </div>
    <br /><br /><br />
    <div className="item">
      <h4>길드 이름을 정해볼까요?</h4>
      <Input></Input>
    </div>
    <br /><br /><br />
    <div className="item">
      <h4>길드를 자세하게 소개해볼까요?</h4>
      <div className="box1">
        <img src={warning} alt="뿅" />
        <h5>길드 소개엔 이런 내용이 들어가면 좋아요!</h5>
      </div>
      <li>주로 어떤 활동을 하게 될지 알려주세요</li>
      <li>이런 사람과 잘 맞아요! 길드 성향을 알려주세요</li>
      <Detail></Detail>
    </div>
    <br /><br /><br />
    <div className="button-box">
    <button>다음</button>
    </div>
    </div>
    </Container>
    </>
  );
};

export default NewGuild;