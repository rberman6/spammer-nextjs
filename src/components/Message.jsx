"use client";
import DeleteMessage from "./DeleteMessage.jsx";
import EditMessage from "./EditMessage.jsx";
import LikeMessage from "./LikeMessage.jsx";
import { useState } from "react";
import ReplyMessage from "./ReplyMessage.jsx";

export default function Message({ post }) {
  // const colorArr = ["blue", "beige", "pink", "green"];

  // function changeColor() {
  //   let randomIndex = Math.floor(Math.random() * colorArr.length);
  //   return colorArr[randomIndex];
  // }
  // let color = changeColor();

  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  return (
    <div>
      <div className="main-post-container">
        <div key={post.id} className="green">
          {isEdit ? (
            <EditMessage post={post} setIsEdit={setIsEdit} />
          ) : (
            <div className="post-container">{post.text}</div>
          )}
          <LikeMessage post={post} />
          <DeleteMessage post={post} />
          <button
            type="button"
            onClick={(e) => {
              // e.stopPropagation();
              setIsEdit(true);
            }}
          >
            ✏️
          </button>
          {isReply ? (
            <ReplyMessage post={post} setIsReply={setIsReply} />
          ) : null}
          <button type="button" onClick={(e) => setIsReply(true)}>
            ↩️
          </button>
        </div>
      </div>
    </div>
  );
}
