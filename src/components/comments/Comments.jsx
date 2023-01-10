import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: "Xayah",
      userId: 1,
      profilePic:
        "https://sites.google.com/site/narutoorigins1/_/rsrc/1299205218898/home/hidden-mist-ninja/sasuke.jpg?height=266&width=400",
      desc: "Hello There!",
    },
    {
      id: 2,
      name: "Luffy",
      userId: 2,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7Xw4oso3c_mVwLIOboKqgwNGM5ATpaimdHFr4Bdl9Bf6E6dPWeH6NlBe9Y7Hm2bna1Y&usqp=CAU",
      desc: "Have a jolly day!",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="leave a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date"> 1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
