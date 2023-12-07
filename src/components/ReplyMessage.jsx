"use client";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function ReplyMessage({ post, setIsReply }) {
  const [textReply, setTextReply] = useState("");
  const [isDisplayText, setIsDisplayText] = useState(false);
  const router = useRouter();

  async function handleReply() {
    // e.preventDefault();
    const response = fetch(`${API_URL}/api/posts/${post.id}/comments`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: textReply,
      }),
    });
    console.log(response);
    setIsDisplayText(true);
    router.refresh();
  }

  function handleCancel() {
    setIsReply(false);
  }
  return (
    <div>
      {isDisplayText ? (
        <div>{textReply}</div>
      ) : (
        <div>
          <input
            type="text"
            value={textReply}
            onChange={(e) => setTextReply(e.target.value)}
          />
          <button onClick={handleReply} type="button">
            Comment
          </button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
