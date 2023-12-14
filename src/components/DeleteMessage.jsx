"use client";

import { useRouter } from "next/navigation.js";

export default function DeleteMessage({ post }) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch(`/api/posts/${post.id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <div>
      <button className="emoji-btn" onClick={handleDelete}>
        🗑️
      </button>
    </div>
  );
}
