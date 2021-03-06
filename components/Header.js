import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../DataContext";

function Header() {
  const { state } = useContext(Context);
  const { currentUser, users } = state;
  const currentUserData = users.find((user) => user.userId === currentUser);

  return (
    <header>
      <Link to="/">
        <h2>OnjaBook</h2>
      </Link>
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
      {currentUserData && (
        <div className="user header-profile">
          <Link to="/user">
            <span>{currentUserData.userName}</span>
          </Link>
          <Link to="/user">
            <img
              src={currentUserData.profilePictureUrl}
              className="user-pic"
              alt=""
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
