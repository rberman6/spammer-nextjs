"use client";
import { useState } from "react";
import { API_URL } from "../lib/API_URL.js";
import { useRouter } from "next/navigation.js";

export default function PostMessages() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const data = await response.json();

    if (!data.success) {
      setError(data.error);
    } else {
      setText("");
      router.refresh();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} id="form-container">
        <input
          type="text"
          placeholder="Please enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="post-message-btn" type="submit">
          Post message
        </button>
        <p>{error}</p>
      </form>
    </div>
  );
}
