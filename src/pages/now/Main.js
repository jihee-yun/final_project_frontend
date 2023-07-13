import {useContext, useState , useEffect} from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Map from "./component/Map";
import Ranking from "./component/Ranking";
import Recommend from "./component/Recommend"
import { styled } from "styled-components";
import Sidebar from "./component/Sidebar";
import { UserContext } from "../../context/UserStore";


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;



const Main = () => {
    const { isSidebar, setIsSidebar } = useContext(UserContext);

    useEffect(() => {
        
        return (
            setIsSidebar("-300px")
        )
    }, []);
    return(
        <>
        <Container>
        <Header/>
        <Map/>
        <Ranking/>
        <Recommend/>
        <Footer/>
        {isSidebar && <Sidebar/>}
        </Container>
        </>

    );
};

export default Main;