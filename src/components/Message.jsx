"use client";
import DeleteMessage from "./DeleteMessage.jsx";
import EditMessage from "./EditMessage.jsx";
import LikeMessage from "./LikeMessage.jsx";
import { useState } from "react";

export default function Message({ post }) {
  // const colorArr = ["blue", "beige", "pink", "green"];

  // function changeColor() {
  //   let randomIndex = Math.floor(Math.random() * colorArr.length);
  //   return colorArr[randomIndex];
  // }
  // let color = changeColor();

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <div key={post.id} className="green">
        {isEdit ? (
          <EditMessage post={post} setIsEdit={setIsEdit} />
        ) : (
          <div>{post.text}</div>
        )}
        <div className="btn-container">
          <LikeMessage post={post} />
          <DeleteMessage post={post} />
          <button
            type="button"
            onClick={(e) => {
              // e.stopPropagation();
              setIsEdit(true);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
