import React, { useState, useEffect } from "react";
import Header from "../components/Header.js";
import { auth } from "../service/firebase.js";
import { db } from "../service/firebase.js";
import './Chat.css'

export const Chat = () => {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(() => {
    setReadError(readError);

    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        setChats(chats);
      });
    } catch (error) {
      setReadError(readError.message);
    }
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
    console.log("chat", content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWriteError(writeError);

    try {
      db.ref("chats").push({
        content: content,
        timestamp: Date.now(),
        uid: user.uid,
      });
      setContent(content);
    } catch (writeError) {
      setWriteError(writeError.message);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="chats">
          {chats.map((chat) => {
            return <p key={chat.timestamp}>{chat.content}</p>;
          })}
        </div>
        {user.chats}
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={content} />
          {writeError ? <p>{writeError}</p> : null}
          <button type="submit">Send</button>
        </form>
        <div>
          Login in as: <strong>{user.email}</strong>
        </div>
      </div>
    </div>
  );
};

export default Chat;
