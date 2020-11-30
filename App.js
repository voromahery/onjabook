import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Feeds from './components/Feeds';
import AddPost from './components/Add-post';
import User from "./components/User";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Feeds />
        </Route>
        <Route exact path="/post">
          <AddPost />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
