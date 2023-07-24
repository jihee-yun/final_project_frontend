import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    width: 65.625rem;
    margin: 2.5rem auto 6.25rem;

    p {
    font-size: .75rem;
    color: #9da1a8;
    line-height: 1.5;
    margin-top: 0.5rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    }

    *{
        box-sizing: border-box;
    }


`;

const Form = styled.div`
display: block;
margin-top: 0em;

`;

const EmailBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

.email {
    font-size: 1.125rem;
    line-height: 3.125rem;
    color: #202225;
}
`
const InputBox = styled.div`
    width: 45.75rem;

    .requestemail{
    width: 100%;
    border: 0.0625rem solid #e6e8ed;
    border-radius: 0.25rem;
    padding: 0.8125rem 0.9375rem;
    color: #202225;
    font-size: 1rem;
    line-height: 1.5;

}

`;

const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.75rem;

    .content{
    font-size: 1.125rem;
    line-height: 3.125rem;
    color: #202225;
    }


`;

const InputBox2 = styled.div`
width: 45.75rem;

.contentbox{
    width: 100%;
    height: 21rem;
    }

    textarea {
    resize: none;
    box-sizing: border-box;
    outline: 0;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
    display: block;
    border: 0.0625rem solid #e6e8ed;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    font-size: .875rem;
    
    }


`

const BUTTON = styled.div`
    margin-top: 3.125rem;
    display: flex;
    justify-content: center;

    button {
    padding-right: 3.75rem;
    padding-left: 3.75rem;
    border-color: #0067ff;
    background-color: #0067ff;
    color: #ffffff;
    }

`

const Request = () => {

    return(
        <Container>
            <Form>
            <EmailBox>
                <div className="email">이메일</div>
                <InputBox>
                <input type="text" className="requestemail"></input>
                <p>입력하신 이메일로 답변이 발송됩니다.</p>
                </InputBox>
            </EmailBox>
        
        
        <ContentBox>
                <div className="content">문의 내용</div>
                <InputBox2>
                <textarea type="text" placeholder="문의 내용을 입력해 주세요." className="contentbox"></textarea>
                </InputBox2>
                </ContentBox>

                <BUTTON>
                    <button className="button">등록</button>
                </BUTTON>
            </Form>

        </Container>
    );
};

export default Request;