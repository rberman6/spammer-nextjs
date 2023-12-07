// import API_URL from "./lib/API_URL.js";
import { API_URL } from "../lib/API_URL.js";
import AllComments from "./AllComments.jsx";
import ReplyMessage from "./ReplyMessage.jsx";
// import AllComments from "./AllComments.jsx";

export default async function AllMessages() {
  const response = await fetch(`${API_URL}/api/posts`, { cache: "no-store" });

  const data = await response.json();
  console.log(data);
  const posts = data.posts;

  return (
    <div id="main-message-container">
      {posts.map((post) => {
        return <AllComments key={post.id} post={post} />;
      })}
    </div>
  );
}
