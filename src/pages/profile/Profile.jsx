import "./profile.scss";
import Posts from "../../components/posts/Posts"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import { EmailOutlined } from "@mui/icons-material";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.discover-the-world.com/app/uploads/2018/08/norway-northern-tromso-surrounds-with-aurora-istk.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://sites.google.com/site/narutoorigins1/_/rsrc/1299205218898/home/hidden-mist-ninja/sasuke.jpg?height=266&width=400"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http://github.com">
              <GitHubIcon fontSize="large" />
            </a>
            <a href="http://linkedIn.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Sasuke</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>KONOHA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>get.social</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts/>
    </div>
  );
};
export default Profile;

