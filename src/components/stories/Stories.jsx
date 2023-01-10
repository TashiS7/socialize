import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: 1,
      name: "Xayah",
      img: "https://image.winudf.com/v2/image1/YWVzdGhldGljLndhbGxwYXBlcl9zY3JlZW5fMF8xNTgzNjAxOTMxXzAwOA/screen-0.jpg?fakeurl=1&type=.webp",
    },
    {
      id: 2,
      name: "Xayah",
      img: "https://nationalparks-15bc7.kxcdn.com/images/parks/sagarmatha/Sagarmatha%20National%20Park.jpg",
    },
    {
      id: 3,
      name: "Xayah",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqIYX55nQP7Cau9Z1pI3uuX4lxAKcEXr_BQ&usqp=CAU",
    },
    {
      id: 4,
      name: "Xayah",
      img: "https://t3.ftcdn.net/jpg/00/96/54/02/360_F_96540263_npL9mfozKxT1aJyccXyiVfmS2BFkDCjr.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Stories;
