import React from 'react'
import {useParams} from "react-router-dom";
function ChatScreen() {
    let {person}=useParams();

  return (
      <h1>
          {person}
      </h1>

  )
}

export default ChatScreen