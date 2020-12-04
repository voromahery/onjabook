import React, { useContext, useState } from "react";
import { Context } from "../DataContext";
import { Link } from "react-router-dom";

function User() {
  const { feed, currentUser, setCurrentUser } = useContext(Context);
  const [userNewPic, setUserNewPic] = useState("");
  const [userNewName, setUserNewName] = useState("");

  function handleIdentity(e) {
    e.preventDefault();
    const newIdentity = {
      userId: 211231,
      likeId: 211231,
      userPic: userNewPic,
      userName: userNewName,
    };
    setCurrentUser(newIdentity);
  }

  return (
    <div>
      <p>Options : </p>
      <form onSubmit={handleIdentity}>
        <label>
          Username :
          <input
            type="text"
            placeholder="Type your username here"
            value={userNewName}
            onChange={(e) => setUserNewName(e.currentTarget.value)}
          />
        </label>
        <label>
          Profile picture :
          <input
            type="url"
            placeholder="Paste a URL here"
            value={userNewPic}
            onChange={(e) => setUserNewPic(e.currentTarget.value)}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}
export default User;
