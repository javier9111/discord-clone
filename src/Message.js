import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar src="https://avatars.githubusercontent.com/javier9111" />
      <div className="message__info">
        <h4>
          Coveran
          <span className="message__timestamp">this is the timestamp</span>
        </h4>
        <p>trhis is the message</p>
      </div>
    </div>
  );
}

export default Message;
