import React from "react";
import { Link } from 'react-router-dom';

function Comments({ author, authorPic, authorText, authorDate }) {

  return (
    <div className="comments">
      <div>
        <div className="user">
          <div className="user">
          <Link to="/user">
            <img src={authorPic} alt={author} className="user-pic" />
            </Link>
            <Link to="/user">
            <span>{author}</span>
            </Link>
          </div>
          <span>{authorDate}</span>
        </div>
        <p>{authorText}</p>
      </div>
    </div>
  );
}

export default Comments;
