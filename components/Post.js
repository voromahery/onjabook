import React, { useContext, useState } from "react";
import { Context } from "../DataContext";
import { Link } from 'react-router-dom';

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

  function likeFunction(id) {
    // const buttonId = Number(e.target.id);
    const findPost = feed.some((post) => userName === post.userName);
    if (findPost) {
      setLikePost(like.length);
      // console.log(likePost);
    } else {
      setLikePost(like - 1);
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
        <span>{likePost}</span>
      </div>
    </div>
  );
}
export default Post;
