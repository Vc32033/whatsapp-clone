import React from "react";
import "./chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Vipul Chuahan</h3>
          <p>
            Last seen <span>11:00 AM</span>
          </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Vipul</span>
          Hello How Are you
          <span className="chat__timestamp">
            date {new Date().getTime}11:00 pm
          </span>
        </p>
        <p className="chat__message chat__sender">
          <span className="chat__name">Vipul</span>
          Hello How Are you of i am fine an you i am also good what about
          village
          <span className="chat__timestamp">
            date {new Date().getTime}11:00 pm
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Vipul</span>
          Hello How Are you
          <span className="chat__timestamp">
            date {new Date().getTime}11:00 pm
          </span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Vipul</span>
          Hello How Are you
          <span className="chat__timestamp">
            date {new Date().getTime}11:00 pm
          </span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
