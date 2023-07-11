import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 10px;

`;

const MemberBox = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
`;

const GuildMemberModal = () => {
  return(
    <>
    <ModalBox> 
      <Box>
        <MemberBox></MemberBox>
        <MemberBox></MemberBox>
        <MemberBox></MemberBox>
        <MemberBox></MemberBox>
      </Box>
    </ModalBox>
    </>
  );
};

export default GuildMemberModal;