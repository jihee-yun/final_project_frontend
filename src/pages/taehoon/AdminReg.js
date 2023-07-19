import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../jihee/images/logo.png";

const AdminRegBlock = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 400px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  h2 {
    margin-bottom: 20px;
    color : #FFCFDA;
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
    cursor: pointer;
  }

  .logo img {
    width: 150px;
    height: 130px;
  }
  
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        font-weight: bold;
    }

    input[type="radio"] {
        margin-left: 60px;
    }


    input[type="text"],
    input[type="password"],
    input[type="radio"] {
        flex: 1;
        padding: 8px;
        margin-right: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

   button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const AdminReg = () => {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [authority, setAuthority] = useState("");

  const LogoClick = () => {
    navigate("/");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AdminRegBlock>
        <div className="logo">
            <img src={logo} alt="logo" className="logo" onClick={LogoClick}/>
        </div>
       
      <h2>관리자 등록</h2>
        
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required placeholder="아이디"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={adminPw}
            onChange={(e) => setAdminPw(e.target.value)}
            required placeholder="비밀번호"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required placeholder="이름"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            required placeholder="생년월일"
          />
        </label>

        <br />

        <label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required placeholder="전화번호"
          />
        </label>

        <br/>


        <br />
        <button type="submit">등록</button>
      </form>
    </AdminRegBlock>
  );
};

export default AdminReg;
