import React from "react";
import "../styles/chat.css";
import { useParams ,Link} from "react-router-dom";
function Chat(props) {
  return (
    <Link to={`/chats/${props.name}`}>
      <div className="main-chat-content">
        <div className="chat-flex">
          <div className="profile">
            <img src={props.profilePicture} alt="" />
            <div className="person-message">
              <p className="person-name">{props.name}</p>
              <p style={{ color: "gray" }}>{props.message}</p>
            </div>
          </div>
          <div className="status">
            <p>{props.timeStamp}</p>
          </div>
        </div>
      </div>
   </Link>
  );
}

export default Chat;
