import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Recommendations for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://wallpaperaccess.com/full/6293696.png" alt="" />
              <span>Luffy</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <span>Sasuke</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Recent Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <p>
                <span>Sasuke</span> Liked a picture.
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <p>
                <span>Sasuke</span> Is going for an adventure!
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Active Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sasuke</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sasuke</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://i.pinimg.com/550x/c6/28/81/c62881d3cb7b1b6b79d4fb8fc45e8d72.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sasuke</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
