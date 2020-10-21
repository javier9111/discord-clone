import React from "react";
import "./Chat.css";
import ChantHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
function Chat() {
  return (
    <div className="chat">
      <ChantHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TestChannel`} />
          <button className="chat__inputButton" type="submit">
            Send message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
