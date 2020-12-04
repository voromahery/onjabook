import React, { useContext, useState, useEffect } from "react";
import { Context } from "../DataContext";
import { Link } from "react-router-dom";

function User() {
  const { state, dispatch } = useContext(Context);
  const { users, currentUser } = state;
  const [userNewPic, setUserNewPic] = useState("");
  const [userNewName, setUserNewName] = useState("");
  console.log(users, "find");

  const currentUserData = users.find((user) => user.userId === currentUser) || {
    userNewName: "",
    userNewPic: "",
  };

  useEffect(() => {
    setUserNewName(currentUserData.userNewName);
    setUserNewPic(currentUserData.userNewPic);
  }, [users]);

  function handleIdentity(e) {
    e.preventDefault();
    dispatch({
      type: "UPDATE-PROFILE",
      userName: userNewName,
      profilePictureUrl: userNewPic,
    });
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
