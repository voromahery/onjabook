import React from "react";

function Comments({ author, authorPic, authorText, authorDate }) {

  return (
    <div className="comments">
      <div>
        <div className="user">
          <div className="user">
            <img src={authorPic} alt={author} className="user-pic" />
            <span>{author}</span>
          </div>
          <span>{authorDate}</span>
        </div>
        <p>{authorText}</p>
      </div>
    </div>
  );
}

export default Comments;
