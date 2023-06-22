import React from "react";
import styled from "styled-components";
import { useState } from "react";
import logo from "../../images/logo.png";

const AdminDeleteBlock = styled.div`
    justify-content: center;
    align-items: center;
    
    .logo {
        text-align: center;
    }

    .logo img {
        width: 150px;
        height: 150px;
        margin-top: 10px;
    }

    .form-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: 200px;
    }

    .form-container form {
        box-sizing: border-box;
        padding: 10px;
        color: #FFCFDA;
        width: 500px;
        height: 200px;
        margin: 20px;
        margin-top: 30px;
        font-weight: bolder;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0 , 0, 0.1);
    }

    ul {
        padding : 10px;
        margin : 5px;
    }

    ul li {
        margin-bottom: 10px;
    }

    .delBtn {
        justify-content: center;
        margin-top: 20px;
    }

    .delBtn button {
        width: 150px;
        height: 30px;
        padding: 10px 20px;
        background-color: #FFCFDA;
        font-weight: bolder;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 450px;
    }
`;



const AdminDelete = () => {
    
  
    
    return (
      <AdminDeleteBlock>
        <div className="logo">
            <img src={logo} alt="logo" className="logo" />
        </div>


        <div class="form-container">
            <form action="#" method="text">
                <fieldset>
                    <legend>리뷰</legend>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </fieldset>
            </form>

            <form action="#" method="text">
                <fieldset>
                    <legend>이벤트</legend>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </fieldset>
            </form>

            <form action="#" method="text">
                <fieldset>
                    <legend>회원탈퇴</legend>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </fieldset>
            </form>

            <form action="#" method="text">
                <fieldset>
                    <legend>소모임</legend>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </fieldset>
            </form>

            <div className="delBtn">
                <button>삭제</button>
            </div>
        </div>
        </AdminDeleteBlock>
    );
  };
  
  export default AdminDelete;