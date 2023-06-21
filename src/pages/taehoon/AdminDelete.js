import React from "react";
import styled from "styled-components";

const AdminDeleteBlock = styled.div`
    position: relative;
    display: flex;
    background-color: white;
    justify-content: center;

    h2 {
        color: #FFCFDA;
        font-weight: bolder;
        margin-top: 50px;
    }
`;

const AdminDelete = () => {
    return(
        <AdminDeleteBlock>
            <h2>삭제</h2>
        </AdminDeleteBlock>
    );
}

export default AdminDelete;