import React from "react";
import styled from "styled-components";

const AdminReportBlock = styled.div`
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

const AdminReport = () => {
    return(
        <AdminReportBlock>
            <div className="title">
                <h2>신고 내역</h2>
            </div>
            
        </AdminReportBlock>
    );
}

export default AdminReport;