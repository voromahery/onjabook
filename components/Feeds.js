import React, { Fragment, useContext, useState } from "react";

import { Context } from "../DataContext";
import Post from "./Post";
import Comments from "./Comments";

function Feeds() {
  const { state, postDate, dispatch } = useContext(Context);
  const { feed, currentUser, users } = state;
  const currentUserData = users.find((user) => user.userId === currentUser);

  function handleComment(e) {
    e.preventDefault();
    const buttonId = Number(e.target.id);
    const findPost = feed.find((post) => post.id === buttonId);
    const coms = {
      commentorName: currentUserData.userName,
      commentorPic: currentUserData.profilePictureUrl,
      text: e.target.comment.value,
      date: postDate.toLocaleDateString(),
      id: Date.now(),
    };
    
    findPost.comments = [...findPost.comments, coms];
    console.log(findPost.comments);
    dispatch({ type: "ADD-COMMENT", comments: [findPost.comments] });
  }

  return (
    <div>
      {feed.map((post) => (
        <Fragment key={post.id}>
          <Post
            post={post}
            key={post.id}
            id={post.id}
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
              id={comment.id}
              author={comment.commentorName}
              authorPic={comment.commentorPic}
              authorText={comment.text}
              authorDate={comment.date}
            />
          ))}
          <form className="comment-form" onSubmit={handleComment} id={post.id}>
            <input
              type="text"
              placeholder="Add a comment..."
              name="comment"
              onChange={(e) => e.currentTarget.value}
            />
            <button type="submit" className="post-comment">
              Comment
            </button>
          </form>
          <hr></hr>
        </Fragment>
      ))}
    </div>
  );
}

export default Feeds;
