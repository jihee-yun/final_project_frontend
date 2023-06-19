import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminRegBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdminReg = () => {
    return(
        <AdminRegBlock>
            <p>관리자 등록</p>
        </AdminRegBlock>
    );
}

export default AdminReg;