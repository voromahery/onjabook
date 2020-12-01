import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";
import userData from "./userData.json";

console.log(userData, "USER");

const Context = React.createContext();
function ContextProvider(props) {
  const postDate = new Date(Date.now());
  const [postDescription, setPostDescription] = useState("");
  const [postImage, setPostImage] = useState("");
  const [newComment, setNewComment] = useState("");

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {

        case "IDENTITY":
          return {
            ...state,
            identity: action.userIdentity,
          };

        case "POST": {
          return {
            ...state,
            feed: action.feed,
          };
        }

        case "COMMENT": {
          return {
            ...state,
            comments: action.comments,
          };
        }

        case "ADD": {
          const newPost = {
            id: Date.now(),
            description: postDescription,
            postPic: postImage,
            userName: "Daniel",
            userPic:
              "https://portfolio-onja-daniel.netlify.app/images/daniel.jpg",
            comments: [],
            date: postDate.toDateString(),
            like: [],
          };

          return {
            feed: [...state.feed, newPost],
          };
        }
      }
    },
    {
      userIdentity: [],
      feed: [],
      userName: "",
      userPic: "",
      comment: "",
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", feed: postList });
    // dispatch({ type: "ADD", feed: state.feed, ...postList });
  }, []);

  console.log(state.feed);
  return (
    <div>
      <Context.Provider
        value={{
          feed: state.feed,
          dispatch,
          postList,
          postDescription,
          setPostDescription,
          postImage,
          setPostImage,
          newComment,
          setNewComment,
          postDate,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
