import React, { useContext, useState } from "react";
import { Context } from "../DataContext";
import likeIcon from "../icons/like.svg";

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
  const { state, dispatch } = useContext(Context);
  const { users, currentUser } = state;
  const [likePost, setLikePost] = useState(like.length);
  const [userLiked, setUserLiked] = useState(post.like);
  const currentUserData = users.find((user) => user.userId === currentUser);

  function likeFunction() {
    const findPost = userLiked.some(
      (likes) => likes.userId === currentUserData.userId
    );

    const unlike = userLiked.filter(
      (likes) => likes.userId !== currentUserData.userId
    );

    const newLiker = {
      ...post,
      like: [currentUserData, ...like],
    };

    if (!findPost) {
      setUserLiked(newLiker.like);
      setLikePost(newLiker.like.length);
      console.log(newLiker.like);
    } else {
      setUserLiked(unlike);
      setLikePost(unlike.length);
    }
  }

  return (
    <div className="post-visible">
      <div className="user">
        <div className="user profile-feed">
          <img src={userPic} alt={userName} className="user-pic" />
          <span>{userName}</span>
        </div>
        <span>{date}</span>
      </div>
      <article>
        <p>{postText}</p>
        <img src={postPic} alt="post" />
      </article>
      <div className="like-info">
        <div className="like">
          <img
            src={likeIcon}
            className="like-button"
            id={id}
            onClick={() => likeFunction(post)}
            alt=""
          />
          <span>{likePost}</span>{" "}
        </div>
      </div>
    </div>
  );
}
export default Post;
