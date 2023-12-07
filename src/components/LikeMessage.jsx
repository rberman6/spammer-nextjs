"use client";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation.js";

export default function LikeMessage({ post }) {
  const router = useRouter();
  async function handleLike() {
    const response = await fetch(`${API_URL}/api/posts/${post.id}/likes`, {
      method: "POST",
      cache: "no-store",
    });
    router.refresh();
  }
  return (
    <div>
      <div>{post.likes}</div>
      <button onClick={handleLike}>👍</button>
    </div>
  );
}
