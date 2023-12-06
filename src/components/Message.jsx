export default function Message({ post }) {
  const colorArr = ["blue", "beige", "pink", "green"];

  function changeColor() {
    let randomIndex = Math.floor(Math.random() * colorArr.length);
    return colorArr[randomIndex];
  }
  let color = changeColor();

  return (
    <div key={post.id} className={`${color}`}>
      {post.text}
    </div>
  );
}
