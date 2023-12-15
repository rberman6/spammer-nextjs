import AllMessages from "../components/AllMessages.jsx";
import PostMessages from "../components/PostMessages.jsx";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div>
      <main id="wrapper">
        <h1>Spammer</h1>
        <PostMessages />
        <AllMessages />
      </main>
    </div>
  );
}
