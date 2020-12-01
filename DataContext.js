import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";

const Context = React.createContext();
function ContextProvider(props) {
  const postDate =  new Date(Date.now());
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] =  useState("");
  
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "POST": {
          return {
            ...state,
            feed: action.feed,
          };
        }
        case "ADD": {
          const newPost = {
            id: Date.now(),
            description: postDescription,
            postPic:postImage,
            userName: action.userName,
            userPic:
              "https://portfolio-onja-daniel.netlify.app/images/daniel.jpg",
            comments: [],
            date: postDate.toDateString(),
            like: 0,
          };
          console.log(newPost);
          return {
            feed: [...state.feed, newPost],
          };
        }
        case "COMMENT": {
          return {
            ...state,
            newComment: action.newComment,
          };
        }
      }
    },
    {
      feed: [],
      newComment: "",
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", feed: postList });
    // dispatch({ type: "ADD", feed: state.feed, ...postList });
  }, []);

  console.log(state.feed);
  return (
    <div>
      <Context.Provider value={{ feed: state.feed, dispatch, postList, postDescription, setPostDescription, postImage, setPostImage }}>
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };

// id: Date.now(),
// description: "action.description",
// postPic: "action.postPic",
// userName: "action.userName",
// userPic: "action.userPic",
// comments: "action.comments",
// date: "new Date(Date.now).toDateString()",
// like: "action.like",
