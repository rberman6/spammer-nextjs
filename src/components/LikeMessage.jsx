"use client";

import { useRouter } from "next/navigation.js";

export default function LikeMessage({ post }) {
  const router = useRouter();
  async function handleLike() {
    const response = await fetch(`/api/posts/${post.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div className="likes-container">
      <div>{post.likes}</div>
      <button className="emoji-btn" onClick={handleLike}>
        👍
      </button>
    </div>
  );
}
