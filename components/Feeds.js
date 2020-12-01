import React, { Fragment, useContext, useState } from "react";
import Post from "./Post";
import Comments from "./Comments";
import { Context } from "../DataContext";

function Feeds() {
  const { feed, dispatch } = useContext(Context);

  const [newComment, setNewComment] = useState("");
  const [likePost, setLikePost] = useState(0);

  function likeFunction(e) {
    const buttonId = Number(e.target.id);
    const findPost = feed.find((post) => post.id === buttonId);
    if (findPost) {
      setLikePost(findPost.like++);
    }
  }

  function handleComment(e) {
    e.preventDefault();
    // dispatch({[]})
    let comment = feed.map((post) => {
      [post.comment,
      {
        new: newComment
      }]
    });
    console.log(comment);
    console.log("Yes");
  }

  return (
    <div>
      {feed.map((post) => (
        <Fragment key={post.id}>
          <Post
            key={post.id}
            id={post.id}
            userName={post.userName}
            userPic={post.userPic}
            postText={post.description}
            date={post.date}
            postPic={post.postPic}
            like={post.like}
            postLike={post.postLike}
            likeFunction={likeFunction}
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
          <form className="comment-form" onSubmit={handleComment}>
            <input
              type="text"
              placeholder="Add a comment..."
              onChange={(e) => {
                dispatch({ type: "COMMENT", value: e.target.value });
              }}
            />
            <button type="submit" className="post-comment">Post</button>
          </form>
          <hr></hr>
        </Fragment>
      ))}
    </div>
  );
}

export default Feeds;
