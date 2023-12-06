"use client";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";

export default function EditMessage({ post, setIsEdit }) {
  const [text, setText] = useState("");
  const router = useRouter();

  async function handleEdit(e) {
    // e.preventDefault();
    if (!text) {
      alert("Please enter/edit message!");
    } else {
      const response = await fetch(`${API_URL}/api/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      });
      const data = await response.json();
      //   console.log(data);
      setIsEdit(false);

      router.refresh();
    }
  }

  async function handleCancel() {
    setIsEdit(false);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div>
          <button onClick={handleEdit} type="button">
            Edit post
          </button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
