import React, { useState, useEffect, useReducer } from "react";
import postList from "./post-list.json";

const Context = React.createContext();
function ContextProvider(props) {
  const [feeds, setFeed] = useState([]);

  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "LOADING":
          return { ...state, loading: true };
        case "RESPONSE": {
          return {
            ...state,
            loading: false,
            response: action.response,
          };
        }
      }
    },
    {
      loading: false,
      response: [],
    }
  );

  useEffect(() => {
    let isLoading = true;
    dispatch({ type: "LOADING" });
    if (isLoading) {
      dispatch({ type: "RESPONSE", response: postList });
    }
    return () => {
      isLoading = false,
      setFeed(state.response);
    }
  }, []);

  console.log(feeds);
  return (
    <div>
      <Context.Provider value={{ feed: state.response, setFeed }}>
        {props.children}
      </Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
