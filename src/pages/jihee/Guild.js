import React, { useContext } from "react";
import styled from "styled-components";
import cafeimg1 from "./images/카페임시이미지.jpeg";
import member from "./images/team.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid lightgray;


  .middle-bar{
    width: 100%;
    height: 20px;
    background-color: #F2F2F2;
    margin-top: 50px;
  }
`;

const RegBox = styled.div`
  width: 100%;
  text-align: center;
  background-color: #F2F2F2;

  .context{
    padding: 50px;

    .context2{
      color: darkgray;
      line-height: 30px;
      margin-top: 30px;
    }
  }
  
  button{
    margin-bottom: 50px;
    width: 150px;
    height: 40px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #585858;
    border: none;
    border-radius: 3px;
    background-color: #FFCFDA;
    cursor: pointer;
    &:hover{
      color: white;
    }
  }
`;

const GuildBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GuildSection = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-top: 50px;
  width: 45%;
  height: 200px;
  transition: all 0.3s;
  border-radius: 10px;
  box-shadow: 0 3px 3px #A4A4A4;
  cursor: pointer;

  &:hover{
    transform: scale(1.02);
  }

  .section1{
    display: flex;
    padding: 30px;
  }

  .thum{
    width: 40%;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
  }

  .section2{
    margin-left: 30px;
    button{
      border: none;
      height: 25px;
      border-radius: 15px;
    }

    .guild-member{
      width: 50px;
      height: 50px;
      border: 3px solid white;
      border-radius: 50px;
      margin-right: -15px;
    }
  }

  .section3{
    display: flex;
    align-items: center;
    margin-top: 35px;

    .count-section{
      display: flex;
      align-items: center;
      img{
        width: 25px;
        height: 25px;
        margin: 10px 0 0 25px;
      }
      p{
        margin-left: 10px;
        font-size: 1.0rem;
        font-weight: bold;
        color: darkgray;
      }
    }
  }
`;

const Guild = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setGuildNum } = context;

  const selectGuild = (guildNum) => {
    setGuildNum(guildNum);
    navigate('/guilddetail');
  }
  return(
    <>
    <Container>
      <RegBox>
        <div className="context">
          <h1>일시적 모임을 통해</h1>
          <h1>원하는 목적을 달성해봐요</h1>
          <h3 className="context2">나와 같은 목적을 가진 <br />
              친구들을 직접 모집해보세요</h3>
        </div>
        <button>길드 만들기</button>
      </RegBox>
      <div className="middle-bar"></div>
      <GuildBox>
      <GuildSection onClick={() => selectGuild("길드번호")}>
      <div className="section1">
        <img className="thum" src={cafeimg1} alt="길드이미지" />
        <div className="section2">
          <button>카페 이름</button> 
          <p>길드 제목</p>
          <div className="section3">
          <div className="guild-member-section">
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          </div>
          <div className="count-section">
            <img src={member} alt="멤버" />
            <p>0/20</p>
          </div>
          </div>
        </div>
      </div>
      </GuildSection>
      <GuildSection></GuildSection>
      </GuildBox>
    </Container>
    </>
  );
};

export default Guild;