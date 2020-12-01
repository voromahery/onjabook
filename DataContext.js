import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";

const Context = React.createContext();
function ContextProvider(props) {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "POST": {
          return {
            ...state,
            feed: action.feed,
          };
        }
        // case "ADD": {
        //   return {
        //   id: Date.now(),
        //     description:,
        //     postPic: ,
        //     userName: ,
        //     userPic: ,
        //     comments: ,
        //     date: ,
        //     like: ,
        //   }
        // }
        case "COMMENT": {
          return {
            ...state,
            newComment: action.newComment,
          }
        }
      }
    },
    {
      feed: [],
      newComment: '',
    }
  );

  useEffect(() => {
    dispatch({ type: "POST", feed: postList });
  }, []);

  console.log(state.feed);
  return (
    <div>
      <Context.Provider value={{ feed: state.feed, dispatch }}>
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
