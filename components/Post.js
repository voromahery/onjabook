import React, { useContext, useState } from "react";
import { Context } from "../DataContext";
import { Link } from "react-router-dom";

function Post({
  userName,
  userPic,
  date,
  postText,
  postPic,
  like,
  id,
  likeFunction,
  post,
}) {
  const { feed } = useContext(Context);
  const [likePost, setLikePost] = useState(like.length);
  const [newData, setNewData] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    userId: 211231,
    likeId: 21,
    userPic: "https://portfolio-onja-daniel.netlify.app/images/daniel.jpg",
    userName: "Daniel",
  });
  const [userLiked, setUserLiked] = useState(post.like);

  function likeFunction(id) {
    // const buttonId = Number(e.target.id);
    const findPost = feed.some((post) => userName === post.userName);
    if (findPost) {
      const newLiker = {
        ...post,
        like: [currentUser, ...like],
      };
      console.log(userLiked, "Yes");
      setUserLiked(newLiker.like);
      setLikePost(newLiker.like.length);
      return newLiker;
    }
  }

  return (
    <div className="post-visible">
      <div className="user">
        <div className="user">
          <Link to="/user">
            <img src={userPic} alt={userName} className="user-pic" />
          </Link>
          <Link to="/user">
            <span>{userName}</span>
          </Link>
        </div>
        <span>{date}</span>
      </div>
      <article>
        <p>{postText}</p>
        <img src={postPic} alt="post" />
      </article>
      <div>
        <button
          className="like-button"
          id={id}
          onClick={() => likeFunction(post.id)}
        >
          Like
        </button>
        <span>{likePost}</span>{" "}
        {likePost > 0 &&
          userLiked.map((user) => (
            <li key={user.likeId}>{user.userName}</li>
          ))}
      </div>
    </div>
  );
}
export default Post;
