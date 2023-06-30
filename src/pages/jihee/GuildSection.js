import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";
import cafeimg1 from "./images/카페임시이미지.jpeg";
import member from "./images/team.png";

const GuildSectionBox = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }

  margin-top: 50px;
  width: 45%;
  height: 210px;
  transition: all 0.3s;
  border-radius: 10px;
  box-shadow: 0 1px 2px #A4A4A4;
  cursor: pointer;

  &:hover{
    transform: scale(1.02);
  }

  .section1{
    display: flex;
    flex-wrap: nowrap;
    padding: 30px;
  }

  .section2{
    width: 50%;
    margin-left: 30px;

    p{
      padding-left: 3px;
      font-weight: bold;
      font-size: .9rem;
    }

    button{
      color: #7c7c7c;
      border: none;
      height: 25px;
      border-radius: 15px;
    }

    .guild-member-section{
      display: flex;
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
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 35px;

    .count-section{
      width: 50%;
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

const Thumb = styled.div`
    width: 40%;
    height: 150px;
    border-radius: 5px;
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
`;

const GuildSection = ({guildInfo}) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { setGuildNum } = context;

  console.log(guildInfo);

  const selectGuild = (guildNum) => {
    setGuildNum(guildNum);
    navigate('/guild/detail');
  }

  return(
    <>
    {guildInfo && guildInfo.map(guild => (
    <GuildSectionBox key={guild.id} onClick={() => selectGuild("길드번호")}>
      <div className="section1">
        <Thumb className="thum" imageurl={guild.thumbnail} />
        <div className="section2">
          <button>{guild.region}</button> 
          <p>{guild.guildName}</p>
          <div className="section3">
          <div className="guild-member-section">
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          <img className="guild-member" src={cafeimg1} alt="프로필사진" />
          </div>
          <div className="count-section">
            <img src={member} alt="멤버" />
            <p>0/{guild.limitMember}</p>
          </div>
          </div>
        </div>
      </div>
      </GuildSectionBox>
      ))}
    </>
  );
};

export default GuildSection;