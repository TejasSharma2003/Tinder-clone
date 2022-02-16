import React,{useState,useEffect} from 'react';
import chats from "../chats"
import Chat from "./Chat"
function Chats() {
  return(
      <div>
        {chats.map((chat)=>{
          return(
            <Chat name={chat.name} profilePicture={chat.profilePicture} timeStamp={chat.timeStamp} message={chat.message}/>
          )

        })}
          
      </div>
  );
}

export default Chats;
