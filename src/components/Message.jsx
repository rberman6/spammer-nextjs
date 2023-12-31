"use client";
import DeleteMessage from "./DeleteMessage.jsx";
import EditMessage from "./EditMessage.jsx";
import LikeMessage from "./LikeMessage.jsx";
import ReplyMessage from "./ReplyMessage.jsx";
import { useState, useEffect } from "react";

export default function Message({ post }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const colorArr = ["blue", "beige", "pink", "green"];
    let randomIndex = Math.floor(Math.random() * colorArr.length);
    let newColor = colorArr[randomIndex];
    if (newColor !== color) {
      setColor(newColor);
    }
  }, [color]);

  return (
    <div>
      <div id="main-post-container" className={`${color}`}>
        <div className="post-container">💬 {post.text}</div>
        <div key={post.id} id="btn-container">
          <LikeMessage post={post} />
          <DeleteMessage post={post} />
          {isEdit ? <EditMessage post={post} setIsEdit={setIsEdit} /> : null}
          <button
            className="emoji-btn"
            onClick={(e) => {
              // e.stopPropagation();
              setIsEdit(true);
            }}
          >
            ✏️
          </button>
          {isReply ? (
            <ReplyMessage
              post={post}
              setIsReply={setIsReply}
              isReply={isReply}
            />
          ) : null}
          <button className="emoji-btn" onClick={(e) => setIsReply(true)}>
            ↩️
          </button>
        </div>
      </div>
    </div>
  );
}
