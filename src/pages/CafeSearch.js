import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  /* padding: 50px; */

  button{
    position: absolute;
    left: 20px;
    top: -50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70px;
    height: 35px;
    margin: 50px 0 30px 0;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    font-weight: 600;
    color: black;
    cursor: pointer;
  }

  img{
    width: 15px;
    height: 15px;
  }
`;

const Box = styled.div`
  @media (max-width: 768px) {
    justify-content: center;
  }
  position: relative;
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  grid-gap: 25px;
  align-items: center;
  padding-top: 50px;
  margin-top: 100px;
`;

const CafeBox = styled.div`
  height: 300px;
  margin: 30px 15px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  border-radius: 10px;
  box-shadow: 0 3px 3px #A4A4A4;
  cursor: pointer;

  &:hover{
    transform: scale(1.02);
  }

  .background {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,.7) 50%, rgba(0,0,0,0) 100%);
  }

  .content {
    position: absolute;
    padding: 20px;
    bottom: -20px;
    color: white;

    .intro{
      height: 45px;
    }
    
    p {
      font-weight: bold;
      &:nth-child(1) {
        font-size: .7rem;
        text-decoration: underline #FFCFDA 3px;
        text-underline-offset: 5px;
      }
      &:nth-child(2) {
        color: #FFCFDA;
        font-size: .9rem;
      }
      &:nth-child(3) {
        font-size: 1.1rem;
      }
    }
  }
`;

const Thumb = styled.div`
  width: 100%;
  height: 100%;
  object-fit: fit;
  background-image: url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
`;

const CafeSearch = () => {
    const navigate = useNavigate();
    const { sword } = useParams();
    const [searchResult, setSearchResult] = useState([]);
    const [isSearchResult, setIsSearchResult] = useState(false);

    useEffect(() => {
        const search = async () => {
            try{
                const rsp = await AxiosApi.searchListLoad(sword);
                setSearchResult(rsp);
                console.log(rsp);
                if(rsp.length === 0){
                    setIsSearchResult(false);
                } else if (rsp.length > 0) {
                    setIsSearchResult(true);
                }
            } catch (error) {
                console.error("검색결과 받아오기 실패", error);
            }
        };
        search();
    }, [sword]);



return(
    <>
    <Container> 
    <Box>
    <CafeBox >
      <Thumb className="img"/>
      <div className="background"></div>
      <div className="content">
        <p></p>
        <p></p>
        <p className="intro"></p> 
      </div>
    </CafeBox>
   
    </Box>
    </Container>
    </>
    );
};
export default CafeSearch;