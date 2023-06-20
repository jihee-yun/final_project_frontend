import React from "react";
import styled from "styled-components";


const AdminDeclarationBlock = styled.div`
    position: relative;
    display: flex;
    background-color: white;
    justify-content: center;

    .title {
        display: flex;
        align-items: center;
    }

    .title h2 {
        color: #FFCFDA;
        font-weight: bolder;
        font-size: 35px;
        margin: 0 10px; /* Adjust the margin as needed */
    }

    .title img {
        width: 120px;
        height: 100px;
    }
`;

const AdminDeclaration = () => {
    return (
        <AdminDeclarationBlock>
            <div className="title">
                
                <h2>신고</h2>
                
            </div>
        </AdminDeclarationBlock>
    );
}

export default AdminDeclaration;