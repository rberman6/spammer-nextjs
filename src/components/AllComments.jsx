import { API_URL } from "@/lib/API_URL.js";
import Message from "./Message.jsx";

export default async function AllComments({ post }) {
  const response = await fetch(`${API_URL}/api/posts/${post.id}/comments`, {
    cache: "no-store",
  });
  const data = await response.json();
  console.log(data);
  const comments = data.comments;

  return (
    <div>
      <Message post={post} />
      <div className="comments-container">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="comment-box">
              <p>💬 {comment.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
