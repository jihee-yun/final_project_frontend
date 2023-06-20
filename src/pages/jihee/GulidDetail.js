import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/UserStore";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid lightgray;
`;

const GuildDetail = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  const { guildNum } = context;

  console.log(guildNum);
  
  return(
    <>
    <Container>
      aaa
    </Container>
    </>
  );
};

export default GuildDetail;