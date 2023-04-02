import React, { useEffect, useState } from "react";
import ChatBody from "./chatbody";
import ChatFooter from "./chatfooter";
import io from "socket.io-client";

const socket = io("http://localhost:4000");


const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  console.log(socket)
  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);
  return (
    <div className="chat">
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};
export default ChatPage;
