import "./posts.scss";
import Post from "../post/Post";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Xayah",
      userId: 1,
      profilePic:
        "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-xr-duo-reveal/en_US/6429fe351efd191ad5e2512edee5b24fb94c94cd/assets/img/portrait-xayah.png",
      desc: "Xayah the champion! ⚔",
      img: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-xr-duo-reveal/en_US/6429fe351efd191ad5e2512edee5b24fb94c94cd/assets/img/portrait-xayah.png",
    },
    {
      id: 2,
      name: "Sasuke",
      userId: 2,
      profilePic:
        "https://sites.google.com/site/narutoorigins1/_/rsrc/1299205218898/home/hidden-mist-ninja/sasuke.jpg?height=266&width=400",
      desc: "This is the path I walk, no one can stop it. 🚶🏻",
      img: "https://sites.google.com/site/narutoorigins1/_/rsrc/1299205218898/home/hidden-mist-ninja/sasuke.jpg?height=266&width=400",
    },
    {
      id: 3,
      name: "Luffy",
      userId: 3,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7Xw4oso3c_mVwLIOboKqgwNGM5ATpaimdHFr4Bdl9Bf6E6dPWeH6NlBe9Y7Hm2bna1Y&usqp=CAU",
      desc: "No matter how hard or impossible it is, never lose sight of your goal! ✌🏼",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7Xw4oso3c_mVwLIOboKqgwNGM5ATpaimdHFr4Bdl9Bf6E6dPWeH6NlBe9Y7Hm2bna1Y&usqp=CAU",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
export default Posts;
