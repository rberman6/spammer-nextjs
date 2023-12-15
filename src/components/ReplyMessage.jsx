"use client";

import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function ReplyMessage({ post, isReply, setIsReply }) {
  const [commentReply, setCommentReply] = useState("");
  const router = useRouter();

  async function handleReply(e) {
    e.preventDefault();
    const response = await fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: commentReply,
      }),
    });

    const data = await response.json();

    setCommentReply("");
    setIsReply(false);
    router.refresh();
  }

  function handleCancel() {
    setIsReply(false);
  }

  return (
    <div>
      <div>
        {isReply ? (
          <form id="form-reply-container" onSubmit={handleReply}>
            <input
              className="reply-input"
              type="text"
              value={commentReply}
              onChange={(e) => setCommentReply(e.target.value)}
            />
            <div className="btn-reply-container">
              <button className="reply-btn" type="submit">
                Comment
              </button>
              <button className="reply-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
