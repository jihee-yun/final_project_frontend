import {useRef, useEffect, useState, useContext} from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Map from "./component/Map";
import Ranking from "./component/Ranking";
import Recommend from "./component/Recommend"
import Sidebar from "./component/Sidebar";
import { styled } from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import UserStore from "../../context/UserStore";

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
`;



const Main = () => {
    const [isOpen, setOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const isSidebar = useContext(UserStore);

    return(
        <>
        <Container>
        <Header/>
        <Map/>
        <Ranking/>
        <Recommend/>
        <Footer/>
        {isSidebar && <Sidebar />}
        </Container>
        </>

    );
};

export default Main;