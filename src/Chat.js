import React from "react";
import "./Chat.css";
import ChantHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import { useState } from "react";

function Chat() {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);

  const [input, setInput] = useState([]);

  return (
    <div className="chat">
      <ChantHeader channelName={channelName} />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${channelName}`}
          />
          <button
            disabled={!channelId}
            className="chat__inputButton"
            type="submit"
          >
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
