import React,{useState} from "react";
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import tinderClone from "../Assets/Logos/tinderIcon.png"
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../styles/Header.css"
//React Router
import { Routes, Route, Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"


function Header({back}) {
  let navigate=useNavigate();
  return (
    <div className="header">
          
          {back?<IconButton><ArrowBackIosIcon onClick={()=>{navigate("/")}} fontSize="large" /></IconButton>:<IconButton><PersonIcon fontSize="large"/></IconButton>}
          
      <Link to="/">
          <img src={tinderClone}></img>
      </Link>
      

      <Link to="/chats">
        <IconButton >
          <ChatBubbleIcon fontSize="large"/>
        </IconButton>
      </Link>

    </div>
  );
}

export default Header;
