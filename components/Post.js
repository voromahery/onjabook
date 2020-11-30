import React, {useContext, useState} from "react";
import { Context } from "../DataContext";

function Post({ userName, userPic, date, postText, postPic, like, id, likeFunction }) {
  const {feed} = useContext(Context);

  return (
    <div className="post-visible">
      <div className="user">
        <div className="user">
          <img src={userPic} alt={userName} className="user-pic" />
          <span>{userName}</span>
        </div>
        <span>{date}</span>
      </div>
      <article>
        <p>{postText}</p>
        <img src={postPic} alt="post" />
      </article>
      <div>
        <button className="like-button" id={id} onClick={likeFunction}>Like</button>
        <span>{like}</span>
      </div>
    </div>
  );
}
export default Post;
