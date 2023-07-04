import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/logo.png";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import img from "./images/upload.png";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: #FAFAFA;

  .upload-box{
      position: absolute;
      top: 180px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        width: 75px;
        height: 75px;
      }
    }



  .thumbnail{
    width: 100%;
    position: relative;

    .cancel{
      position: absolute;
      right: -30px;
      top: 77px;
    }
  }

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
    width: 300px;
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

  .upload-img{
    margin-top: 20px;
    width: 100%;
    height: 350px;
    border: 1px dashed lightgray;
    /* box-shadow: 1px 1px 1px lightgray; */
    object-fit: cover;
    background-image: url(${props => props.imageurl});
    background-size: cover;
    background-position: center;
  }

  #guild-thum {
    display: none;
  }

  .button-box {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;

    button{
    width: 130px;
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
  padding-left: 15px;
  background-color: rgba(255, 207, 218, 0.5);
`;

const NewGuildSecond = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {region, guildName, guildIntro} = location.state;

  // 이미지 미리보기
  const [imageSrc, setImageSrc] = useState(null);

  const onUpload = async(e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    const result = await new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result || null);
      };
    });
    setImageSrc(result);
  }

  const clearImg = () => {
    setImageSrc(null);
  }

  console.log(region, guildName, guildIntro);

  const createGuild = () => {

  };

  const prevPage = () => {
    navigate(-1);
  };
  return(
    <>
    <Container>
      <div className="content">
      <Link to="/guild" style={{ textDecoration: "none", color: "inherit"}}><img src={logo} alt="스위트킹덤로고" /></Link>
      <br /><br /><br /><br /><br />
      <div className="thumbnail">
      <h4>길드 썸네일을 등록해볼까요?</h4>
      <br />
      <label htmlFor="guild-thum">
        {!imageSrc && <div className="upload-box">
          <img src={img} alt="업로드버튼" />
          <div className="upload-btn">클릭해서 사진을 업로드하세요</div>
        </div>
        }
      </label>
      <input type="file" id="guild-thum" accept="image/*" onChange={e => onUpload(e)} />
      <div className="upload-img" style={{ backgroundImage: `url(${imageSrc})` }} />
      {imageSrc && <DisabledByDefaultIcon className="cancel" style={{width:"30px", height:"30px", cursor:"pointer"}} onClick={clearImg}/>}
      </div>
      <br /><br /><br />
      <div className="item">
      <h4>만날 날짜를 입력해볼까요?</h4>
      <Input placeholder="달력 넣어볼까..."></Input>
      </div>
      <br /><br /><br />
      <div className="item">
      <h4>만날 시간을 입력해볼까요?</h4>
      <Input></Input>
      </div>
      <br /><br /><br />
      <div className="item">
      <h4>길드 인원을 정해볼까요?</h4>
      <Input></Input>
      </div>
      <br /><br /><br />
      <div className="button-box">
      <button onClick={prevPage}>이전</button>
      <button onClick={createGuild}>개설</button>
      </div>
      </div>
    </Container>
    </>
  );
};

export default NewGuildSecond;