import React from "react";
import "./sidebar.css";
import { Avatar } from "@mui/material";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://img.freepik.com/free-vector/fashion-poster-template-with-photo_52683-35052.jpg?w=740&t=st=1705602303~exp=1705602903~hmac=f56be40d76c742f873994614005b46a7ca014ac8c2306b35257a1cfa4e398677" />
      <div className="sidebarChat__info">
        <h2>Vipul Chauhan</h2>
        <p>This message deleted</p>
      </div>
    </div>
  );
}

export default SidebarChat;
