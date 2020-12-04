import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";

const Context = React.createContext();
function ContextProvider(props) {
  const postDate = new Date(Date.now());
  const [currentUser, setCurrentUser] = useState({
    userId: 211231,
    likeId: 211231,
    userPic: "https://portfolio-onja-daniel.netlify.app/images/daniel.webp",
    userName: "Daniel",
  });

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "POST": {
          return {
            ...state,
            feed: action.feed,
          };
        }
        case "ADD-COMMENT": {
          action.postId,
					action.comments
          const newComment = state.feed.map(post => {
						if (post.postId === action.postId) {
							// update the post
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
      }
    },
    {
      posts: [],
      userIdentity: [],
      feed: [],
      userName: "",
      userPic: "",
      comments: [],
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", feed: postList, });
  }, []);


  console.log(state.comments,"COMMENTS", state);
  return (
    <div>
      <Context.Provider
        value={{
          feed: state.feed,
          state,
          dispatch,
          postList,
          postDate,
          currentUser,
          setCurrentUser,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
