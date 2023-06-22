import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const SidebarContainer = styled.div`
.sidebar {
flex: 1;
height: calc(100vh - 50px);
background-color: black;
position: sticky;
top: 50px;
background-color: rgb(240, 239, 239);
}

.sidebarWrapper {
    padding: 20px;
    color: #555;
}
.sidebarMenu {
    margin-bottom: 2rem;
}
.sidebarTitle {
    font-size: 0.9rem;
    color: rgb(197, 197, 197);
}
.sidebarList {
    list-style: none;
    padding: 0.5rem;
}
.sidebarListItem {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:active {

    }
}

`;



const Sidebar = ({width=280, children}) => {
    const [isOpen, setOpen] = useState(false);
    const [xPosition, setX] = useState(-width);
    const side = useRef();

    // button 클릭 시 토글
    const toggleMenu = () => {
        if(xPosition < 0) {
            setX(0);
            setOpen(true);
        } else {
            setX(-width);
            setOpen(false);
        }
    };
    // 사이드바 외부 클릭시 닫히는 함수
    const handleClose = async e => {
        let sideArea = side.current;
        let sideChildren = side.current.contains(e.target);
        if(isOpen && (!sideArea || !sideChildren)) {
            await setX(-width);
            await setOpen(false);
        }
    }

    useEffect(()=> {
        window.addEventListener("click", handleClose);
        return() => {
            window.removeEventListener("click", handleClose);
        };
    })
 

    return (
        <SidebarContainer>
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        <ul className="sidebarList">
                            <li className="sidebarListItem">Home</li>
                            <li className="sidebarListItem">Home</li>
                            <li className="sidebarListItem">Home</li>
                        </ul>
                    </h3>
                </div>
            </div>
        </div>
        </SidebarContainer>


    );
};

export default Sidebar;