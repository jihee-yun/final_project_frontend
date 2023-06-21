import React from "react";
import styled from "styled-components";
import { useState } from "react";
import logo from "../../images/logo.png";

const AdminDeleteBlock = styled.div`
    justify-content: center;
    align-items: center;

    h2 {
        color: #FFCFDA;
        font-weight: bolder;
        margin-top: -20px;
        margin-right: 10px;
    }

    .admin-delete {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;

        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .logo {
        text-align: center;
        margin-bottom: 20px;
    }

    .logo img {
        width: 100px;
    }

    .title {
        text-align: center;
        margin-bottom: 20px;
    }

    .container {
        margin-bottom: 20px;
    }

    .box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #ffffff;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding: 10px;
    }

    .box-item {
        display: flex;
        align-items: center;
    }

    .box-item input[type='radio'] {
        margin-right: 10px;
    }

    .delBtn {
        text-align: center;
    }

    .delBtn button {
        padding: 10px 20px;
        background-color: #ff4d4f;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .delBtn button:not(:last-child) {
        margin-right: 10px;
    }

    form {
        margin-left: 400px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        margin-top: 30px;
    fieldset {
      margin-bottom: 20px;
      width: 600px;
      padding: 10px;
      

      legend {
        color: #FFCFDA;
        font-weight: bolder;
        margin-bottom: 10px;
      }

      ul {
        padding: 10px;
        margin: 10px;
        

        li {
          margin-bottom: 10px;
        }
      }
    }
  } 
`;



const AdminDelete = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    // 리뷰 삭제 함수
    const deleteReview = () => {
      if (selectedItem === 'review') {
        // 리뷰 삭제 로직을 구현합니다.
        console.log('리뷰를 삭제합니다.');
      }
    };
  
    // 이벤트 삭제 함수
    const deleteEvent = () => {
      if (selectedItem === 'event') {
        // 이벤트 삭제 로직을 구현합니다.
        console.log('이벤트를 삭제합니다.');
      }
    };
  
    // 회원 탈퇴 함수
    const deleteUser = () => {
      if (selectedItem === 'user') {
        // 회원 탈퇴 로직을 구현합니다.
        console.log('회원을 탈퇴 처리합니다.');
      }
    };
  
    return (
      <AdminDeleteBlock>
        <div className="admin-delete"> {/* 최상위 컨테이너에 admin-delete 클래스를 추가합니다. */}
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="container">
        <div className="box">
          <div className="box-item">
            <input
              type="radio"
              value="review"
              checked={selectedItem === 'review'}
              onChange={() => setSelectedItem('review')}
            />
            <label>리뷰 삭제</label>
          </div>
          <div className="box-item">
            <input
              type="radio"
              value="event"
              checked={selectedItem === 'event'}
              onChange={() => setSelectedItem('event')}
            />
            <label>이벤트 삭제</label>
          </div>
          <div className="box-item">
            <input
              type="radio"
              value="user"
              checked={selectedItem === 'user'}
              onChange={() => setSelectedItem('user')}
            />
            <label>회원 탈퇴</label>
          </div>
        </div>
      </div>

      <div className="delBtn">
        {selectedItem === 'review' && (
          <button onClick={deleteReview}>리뷰 삭제</button>
        )}
        {selectedItem === 'event' && (
          <button onClick={deleteEvent}>이벤트 삭제</button>
        )}
        {selectedItem === 'user' && (
          <button onClick={deleteUser}>회원 탈퇴</button>
        )}
      </div>
    </div>

    <form action="#" method="text">
        <fieldset>
            <legend>리뷰</legend>
                    <ul>
                        <li></li>
                        <li></li>
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
                        <li></li>
                        <li></li>
                    </ul>
            </fieldset>
        </form>

    
      </AdminDeleteBlock>
    );
  };
  
  export default AdminDelete;