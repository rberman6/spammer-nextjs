import Message from "./Message.jsx";
import { prisma } from "@/lib/prisma.js";

export default async function AllComments({ post }) {
  // const response = await fetch(`/api/posts/${post.id}/comments`, {
  //   cache: "no-store",
  // });
  // const data = await response.json();
  // console.log(data);
  // const comments = data.comments;

  const comments = await prisma.comment.findMany({
    where: {
      postId: post.id,
    },
  });

  return (
    <div>
      <Message post={post} />
      {comments.length > 0 && (
        <div className="comments-container">
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="comment-box">
                <p>💬 {comment.text}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
