import AllMessages from "../components/AllMessages.jsx";

import PostMessages from "../components/PostMessages.jsx";

export default function Home() {
  return (
    <div id="wrapper">
      <h1>Spammer</h1>
      <PostMessages />
      <AllMessages />
    </div>
  );
}
