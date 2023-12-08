"use client";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function ReplyMessage({ post, isReply, setIsReply }) {
  const [commentReply, setCommentReply] = useState("");
  const router = useRouter();

  async function handleReply(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/posts/${post.id}/comments`, {
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
          <form onSubmit={handleReply}>
            <input
              type="text"
              value={commentReply}
              onChange={(e) => setCommentReply(e.target.value)}
            />
            <button type="submit">Comment</button>
            <button onClick={handleCancel} type="button">
              Cancel
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
