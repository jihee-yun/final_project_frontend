import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logo.png";

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

  .upload-btn{
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 30px;
    background-color: #FFCFDA;
    cursor: pointer;
    font-size: .9rem;
    font-weight: bold;
    color: #585858;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
      color: white;
    }
  }

  #guild-thum {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  outline: none;
  width: 100%;
  height: 30px;
  padding-left: 15px;
  background-color: rgba(255, 207, 218, 0.5);
`;

const NewGuildSecond = () => {
  return(
    <>
    <Container>
      <div className="content">
      <Link to="/guild" style={{ textDecoration: "none", color: "inherit"}}><img src={logo} alt="스위트킹덤로고" /></Link>
      <br /><br /><br /><br /><br />
      <div className="item">
      <h4>길드 썸네일을 등록해볼까요?</h4>
      <br />
      <label htmlFor="guild-thum">
          <div className="upload-btn">사진 첨부</div>
      </label>
      <input type="file" id="guild-thum" accept="image/*" />
      </div>
      <br /><br /><br />
      <div className="item">
      <h4>날짜를 입력해볼까요?</h4>
      <Input placeholder="달력 넣어볼까..."></Input>
      </div>
      <br /><br /><br />
      <div className="item">
      <h4>시간을 입력해볼까요?</h4>
      <Input></Input>
      </div>
      </div>
    </Container>
    </>
  );
};

export default NewGuildSecond;