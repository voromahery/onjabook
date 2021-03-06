import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";
import userData from "./userData.json";
const Context = React.createContext();
function ContextProvider(props) {
  const postDate = new Date(Date.now());

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "POST": {
          return {
            ...state,
            feed: postList,
            users: userData,
          };
        }
        case "ADD": {
          return {
            ...state,
            feed: [...state.feed, action.newPost],
          };
        }
        case "UPDATE-PROFILE": {
          const newUser = state.users.map((user) => {
            if (user.userId === state.currentUser) {
              return {
                ...user,
                userName: action.userName,
                profilePictureUrl: action.profilePictureUrl,
              };
            }
            return user;
          });
          return {
            ...state,
            users: newUser,
          };
        }
        case "ADD-COMMENT": {
          action.postId, action.comments;
          const newComment = state.feed.map((post) => {
            if (post.postId === action.postId) {
              //update the post
              return {
                ...post,
                comments: [...post.comments],
              };
            }
            return post;
          });
          return {
            ...state,
            feed: newComment,
          };
        }
        case "LIKE": {
          const newPosts = state.posts.map((post) => {
            if (post.postId === action.postId) {
              return {
                ...post,
                like: post.like.filter(posts => posts.userId !== currentUser),
              };
            }
            return post;
          });
          return { ...state, post: newPost };
        }
        case "UNLIKE": {
          const newPosts = state.posts.map((post) => {
            if (post.postId === action.postId) {
              return {
                ...post,
                like: [...post.like, action.newLike],
              };
            }
            return post;
          });
          return { ...state, post: newPost };
        }
      }
      return state;
    },
    {
      feed: [],
      currentUser: 1,
      users: [],
      comments: [],
    }
  );

  useEffect(() => {
    dispatch({ type: "POST" });
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          state,
          dispatch,
          postDate,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
