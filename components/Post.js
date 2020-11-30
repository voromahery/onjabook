import React from "react";

function Post({ userName, userPic, date, postText, postPic, like}) {
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
        <button className="like-button">Like</button>
        <span>{like}</span>
      </div>
    </div>
  );
}
export default Post;
