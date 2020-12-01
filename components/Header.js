import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../DataContext";

function Header() {
  const {currentUser} = useContext(Context)
  return (
    <header>
      <h2>OnjaBook</h2>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="list-item">
            <Link to="/">Feed</Link>
          </li>
          <li className="list-item">
            <Link to="/post">Add a post</Link>
          </li>
        </ul>
      </nav>
      <div className="user">
        <Link to="/user">
          <span>{currentUser.userName}</span>
        </Link>
        <Link to="/user">
          <img src={currentUser.userPic} className="user-pic" alt="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
