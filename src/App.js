import React,{useState} from "react";
import styled from "styled-components"
import Header from "./components/Header"
import TinderCards from "./components/tinderCards";
// never component name same as of file name it wont render dunno why.
import _swipBtn from "./components/swipButtons"
import Chats from "./components/Chats"
import {Routes,Route,usePararms, Navigate} from "react-router-dom"
import ChatScreen from "./components/ChatScreen"
const MainApp=styled.div`
  *{
    margin:0;
    padding:0;
  }
`
function App() {
  return(
    <MainApp>
      <Routes>
        <Route path="/" element={<><Header/><TinderCards/><_swipBtn/></>}/>
        <Route path="/chats" element={<><Header back="/" /><Chats/></>}/>
        <Route path="/chats/:person" element={<ChatScreen/>}/>
      </Routes>

     
    </MainApp>
  

  );
}

export default App;