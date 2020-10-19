import React from "react";
import "./ChatHeader.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRopundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
function ChatHeader() {
  return (
    <div className="chatHeader">
      <h3>I am the header</h3>
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className="chatHeader__right"></div>
      <NotificationsIcon />
      <EditLocationRoundedIcon />
      <PeopleAltRopundedIcon />
      <div className="chatHeader__search">
        <input placeHolder="Search" />
        <SearchRoundedIcon />
      </div>
      <SendRoundedIcon />
      <HelpRoundedIcon />
    </div>
  );
}

export default ChatHeader;