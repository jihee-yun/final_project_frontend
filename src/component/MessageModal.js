import React from "react";
import styled from 'styled-components';

const ModalStyle = styled.div`
    .modal {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .openModal {
        display: flex;
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

    .inputBtn{
        outline: none;
        cursor: pointer;
        width: 150px;
        margin-right: 140px;
        border: 0;
        padding: 6px 12px;
        color: #fff;
        background-color: #FFCFDA;
        border-radius: 5px;
        font-size: 13px;
    }

    .section {
        width: 450px;
        margin: 0 auto;
        border-radius: 0.3rem;
        background-color: #fff;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: modal-show 0.3s;
        overflow: hidden;
    }
    .section > header {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 12px 12px 12px 12px;
        background-color: #FFCFDA;
        font-weight: 700;
        color:white;
        text-align: center;

    }
    .section > header button {
        position: absolute;
        
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;

        color: white;
        background-color: transparent;
    }

    .section > main {
        padding: 16px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }

    .section > footer {
        margin: 12px 0px;
        padding-right: 16px;
        text-align: right;
    }

   .section > footer input {
        padding: 6px 12px;
        color: #fff;
        background-color: #FFCFDA;
        border-radius: 5px;
        font-size: 16px;
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

const MessageModal = (props) => {
    const { open, confirm, close, type, header, children } = props;

    //confirm에 페이지 이동 시킴
    // modal에 들어갈 props.confirm, props.close 함수 -> 엔터와 ESC를 눌렀을 때 서로 다른 동작을 하게 하려면 다른 함수를 넣으면 된다.
    // 그런 경우가 거의 없겠지만... 혹시나...
        const handleKeyDown = (e) => {
            if(open && e.keyCode === 13){
                confirm();
            } else if(open && e.keyCode === 27){
                close();
            }
        };

   


    
    //console.log("Modal Component : " + type);
    // const maxWidth = type ==="resv" ? 'none' : '450px';
    return (
        <ModalStyle>
            <div className={open ? 'openModal modal' : 'modal'} onClick={close}>
            {open &&
                <div className="section">
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{children}</main>
                    <footer>
                     <input className="inputBtn" type="button" onClick={confirm} autoFocus onKeyDown={handleKeyDown} value="확인"/>
                    </footer>
                </div>
            }
            </div>
        </ModalStyle>
    );
};

export default MessageModal;