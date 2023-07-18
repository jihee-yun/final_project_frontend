import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "./api/AxiosApi";
import { UserContext } from "../../context/UserStore";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL } from "firebase/storage";
import SideMenu from "./components/SideMenu";
import Header from "../now/component/Header";
import Footer from "../now/component/Footer";
import ChatBot from "./components/ChatBot";



const MyBlog = () => {


  return(
    <>
      <Header />

    
    


      <Footer />
    </>
  );
};
export default MyBlog;