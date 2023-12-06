"use client";
import { API_URL } from "@/lib/API_URL.js";
import { useRouter } from "next/navigation.js";

export default function DeleteMessage({ post }) {
  const router = useRouter();
  async function handleDelete() {
    const response = await fetch(`${API_URL}/api/posts/${post.id}`, {
      method: "DELETE",
    });
    router.refresh();
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
