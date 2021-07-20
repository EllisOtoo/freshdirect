import React from "react";
import { In } from "react-bootstrap";
import "./css/chatBox.css";

let divStyle = {
  display: "fixed",
  //   backgroundColor: "lightgreen",
  display: "flex",
  justifyContent: "flex-end",
  width: "250px",
  borderRadius: "10px",
};

let chatInputBox = {
  borderRadius: "10px",
  width: "30vw",
};
function ChatBubble() {
  return (
    <div style={divStyle}>
      <form>
        <input
          style={chatInputBox}
          type="text"
          required
          placeholder={"Chat With Us"}
        />
      </form>
    </div>
  );
}

export default ChatBubble;
