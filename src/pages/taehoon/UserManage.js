import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";

const UserManageBlock = styled.div`
    position: relative;
    display: flex;
    background-color: white;

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .box {
        background-color: #787878;
        padding: 5px;
        border: none;
        border-radius: 10px;
        margin: 60px;
        width: 250px;
        height: 150px;
        box-sizing: border-box;
    }

    .box p {
        margin-top: 5px;
    }

    .logo img{
        width: 200px;
        height: 150px;
        margin-top: 20px;
    }

    p {
        color: #FFCFDA;
        font-weight: bolder;
    }

`;

const UserManage = () => {
    return(
        <UserManageBlock>
            <div className="logo">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="container">
                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>

                <div className="box">
                    <p>이름 : </p>
                    <p>나이 :</p>
                    <p>아이디 :</p>
                    <p>보유 포인트 : </p>
                </div>
            </div>
    </UserManageBlock>
    );
}

export default UserManage;