import React from "react";
import { Link } from "react-router-dom";
import kaneki from "../kaneki.jpg";

function Header() {
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
          <span>Daniel</span>
        </Link>
        <Link to="/user">
          <img src={kaneki} className="user-pic" alt="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
