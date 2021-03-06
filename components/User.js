import React, { useContext, useState, useEffect } from "react";
import { Context } from "../DataContext";

function User() {
  const { state, dispatch } = useContext(Context);
  const { users, currentUser } = state;
  const [userNewPic, setUserNewPic] = useState("");
  const [userNewName, setUserNewName] = useState("");

  const currentUserData = users.find((user) => user.userId === currentUser) || {
    userNewName: "",
    userNewPic: "",
  };

  useEffect(() => {
    setUserNewName(currentUserData.userNewName);
    setUserNewPic(currentUserData.userNewPic);
  }, [users]);

  function handleIdentity(e) {
    const form = e.target;
    e.preventDefault();
    dispatch({
      type: "UPDATE-PROFILE",
      userName: userNewName,
      profilePictureUrl: userNewPic,
    });
    form.reset();
  }

  return (
    <div className="profile">
      <p>Options : </p>
      <form className="profile-form" onSubmit={handleIdentity}>
        <label>
          Username :
          <input
            type="text"
            placeholder="Type your username here"
            onChange={(e) => setUserNewName(e.currentTarget.value)}
            required
          />
        </label>
        <label>
          Profile picture :
          <input
            type="url"
            placeholder="Paste a URL here"
            onChange={(e) => setUserNewPic(e.currentTarget.value)}
          />
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}
export default User;
