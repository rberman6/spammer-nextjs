import AllMessages from "../components/AllMessages.jsx";
import Header from "../components/Header.jsx";
import PostMessages from "../components/PostMessages.jsx";

export default function Home() {
  return (
    <div id="wrapper">
      <Header />
      <PostMessages />
      <AllMessages />
    </div>
  );
}
