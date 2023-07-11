import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
    .modal {
        display: none;  // 숨겨진 상태로 시작
        position: fixed; // 스크롤해도 동일한 위치
        top: 0;  // 화면 전체를 덮도록 위치
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99; // 다른 모달 보다 위에 위치하도록 함
        background-color: rgba(0, 0, 0, 0.6); // 배경색을 검정으로 하고 투명도 조절
    }
    .openModal {
        display: flex; // 모달이 보이도록 함
        align-items: center;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-bg-show 0.8s;
    }
    button {
        outline: none;
        cursor: pointer;
        margin-right: 10px;
        border: 0;
    }
    section {
        width: 90%;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    section > header {
        width: 90%;
        position: relative;
        padding: 16px 0px 16px 35px;
        background-color: white;
        font-weight: 700;
    }

    section > header button {
        position: absolute;
        top: 15px;
        right: 20px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
    }
    section > main {
        padding: 16px;
        border-bottom: 1px solid #dee2e6;
        border-top: 1px solid #dee2e6;
    }
    section > footer {
        padding: 12px 16px;
        text-align: right;
    }
    section > footer button {
        padding: 6px 12px;
        color: #585858;
        background-color: #FFCFDA;
        border-radius: 5px;
        font-size: 13px;
        font-weight: bold;
    }
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -50px;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
    @keyframes modal-bg-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Modal = (props) => {
    const {open, confirm, close, type, header, children} = props;

    // &times; 는 X표 문자를 의미
    return (
        <ModalStyle>
            <div className={open ? "openModal modal" : "modal"}>
                {open && 
                    <section>
                        <header>
                            {header}
                            <button onClick={close}>
                                &times;  
                            </button>
                        </header>
                        <main>{children}</main>
                        <footer>
                            {type && <button onClick={confirm}>확인</button>}
                            <button onClick={close}>취소</button>
                        </footer>
                    </section>
                }
            </div>
        </ModalStyle>
    );
};

export default Modal;