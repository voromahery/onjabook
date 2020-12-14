import React, { Fragment, useContext, useState } from "react";

import { Context } from "../DataContext";
import Post from "./Post";
import Comments from "./Comments";
import addComment from '../icons/send-comment.svg';

function Feeds() {
  const { state, postDate, dispatch } = useContext(Context);
  const { feed, currentUser, users } = state;
  const currentUserData = users.find((user) => user.userId === currentUser);

  function handleComment(e) {
    const form = e.target;
    e.preventDefault();

    const buttonId = Number(e.target.id);
    const findPost = feed.find((post) => post.id === buttonId);

    const coms = {
      userName: currentUserData.userName,
      profilePictureUrl: currentUserData.profilePictureUrl,
      text: e.target.comment.value,
      date: postDate.toLocaleDateString(),
      id: Date.now(),
      userId: currentUser,
    };

    findPost.comments = [...findPost.comments, coms];
    dispatch({ type: "ADD-COMMENT", comments: [findPost.comments] });
    form.reset();
  }

  return (
    <div>
      {feed.map((post) => (
        <div className="feeds" key={post.id}>
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
          <div className="comment-displayed">
            {post.comments.map((comment) => {
              const commentUserData = users.find(
                (user) => user.userId === comment.userId
              );
              return (
                <Comments
                  key={comment.id}
                  id={comment.id}
                  author={commentUserData.userName}
                  authorPic={commentUserData.profilePictureUrl}
                  authorText={comment.text}
                  authorDate={comment.date}
                />
              );
            })}
          </div>
          <form className="comment-form" onSubmit={handleComment} id={post.id}>
            <input
              type="text"
              placeholder="Add a comment..."
              name="comment"
              onChange={(e) => e.currentTarget.value}
            />
            <button type="submit" className="post-comment">
            <img src={addComment} className="comment-icon" alt=""/>
            </button>
          </form>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default Feeds;
