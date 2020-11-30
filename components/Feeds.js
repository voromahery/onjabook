import React, { Fragment, useContext } from "react";
import Post from "./Post";
import Comments from "./Comments";
import { Context } from "../DataContext";

function Feeds() {
  const { feed } = useContext(Context);
  console.log(feed);
  return (
    <div>
      {feed.map((post) => (
        <Fragment key={post.id}>
          <Post
            key={post.id}
            userName={post.userName}
            userPic={post.userPic}
            postText={post.description}
            date={post.date}
            postPic={post.postPic}
            like={post.like}
            postLike={post.postLike}
          />
          {post.comments.map((comment) => (
            <Comments
              key={comment.id}
              author={comment.commentorName}
              authorPic={comment.commentorPic}
              authorText={comment.text}
              authorDate={comment.date}
            />
          ))}
          <form className="comment-form">
            <input type="text" placeholder="Add a comment..." />
          </form>
          <hr></hr>
        </Fragment>
      ))}
    </div>
  );
}

export default Feeds;
