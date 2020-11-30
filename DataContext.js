import React, {useState, useEffect} from "react";
import postList from './post-list.json';

const Context = React.createContext();
function ContextProvider(props) {
const [feed, setFeed] = useState([]);

useEffect(() => {
 setFeed(postList);
}, [])

  return (
    <div>
      <Context.Provider value={{feed, setFeed}}>{props.children}</Context.Provider>
    </div>
  );
}

export { ContextProvider, Context };
