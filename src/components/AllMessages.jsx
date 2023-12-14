import AllComments from "./AllComments.jsx";
import { prisma } from "@/lib/prisma.js";

export default async function AllMessages() {
  // const response = await fetch(`/api/posts`, { cache: "no-store" });

  // const data = await response.json();

  // const posts = data.posts;

  const posts = await prisma.post.findMany({
    orderBy: {
      CreatedAt: "desc",
    },
  });

  return (
    <div id="main-message-container">
      {posts.map((post) => {
        return <AllComments key={post.id} post={post} />;
      })}
    </div>
  );
}
