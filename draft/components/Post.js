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
  const {currentUser, feed } = useContext(Context);
  const [likePost, setLikePost] = useState(like.length);
  const [userLiked, setUserLiked] = useState(post.like);

  function likeFunction() {
    const findPost = userLiked.some((likes) => likes.userId === currentUser.userId);
    const unlike = userLiked.filter((likes) => likes.userId !== currentUser.userId);

    const newLiker = {
      ...post,
      like: [currentUser, ...like],
    };

    if (!findPost) {
      setUserLiked(newLiker.like);
      setLikePost(newLiker.like.length);
    } else {
      setUserLiked(unlike);
      setLikePost(unlike.length);
    }
  }

let name="";
let image=""

const changeIdentity= feed.find(name => currentUser.userId === name.userId);

if (changeIdentity) {
  name = currentUser.userName;
  image=currentUser.userPic;
} else {
  name=userName;
  image=userPic;
}
 
  return (
    <div className="post-visible">
      <div className="user">
        <div className="user">
          <img src={image} alt={name} className="user-pic" />
          <span>{name}</span>
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
          onClick={() => likeFunction(post)}
        >
          Like
        </button>
        <span>{likePost}</span>{" "}
        {likePost > 0 &&
          userLiked.map((user) => <li key={user.likeId}>{user.userName}</li>)}
      </div>
    </div>
  );
}
export default Post;
