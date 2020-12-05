import React, { useContext } from "react";
import { Context } from "../DataContext";
function AddPost() {
  const { state, dispatch, postDate } = useContext(Context);
  const { feed, currentUser, users } = state;
  const currentUserData = users.find((user) => user.userId === currentUser);
  function addNEwPost(e) {
    e.preventDefault();
    const form = e.target;
    const newPost = {
      id: Date.now(),
      description: e.target.description.value,
      postPic: e.target.picture.value,
      userName: currentUserData.userName,
      userPic: currentUserData.profilePictureUrl,
      comments: [],
      date: postDate.toLocaleDateString(),
      like: [],
      userId: currentUser,
    };
    dispatch({ type: "ADD", newPost: newPost });
    console.log({newPost});
    form.reset();
  }

  return (
    <div className="new-post">
      <h3>New post :</h3>
      <form className="form-add" onSubmit={addNEwPost}>
        <textarea
          placeholder="Say what’s on your mind..."
          name="description"
          onChange={(e) => e.currentTarget.value}
        />
        <label>
          <span className="label-text">Picture url :</span>
          <input
            type="url"
            name="picture"
            onChange={(e) => e.currentTarget.value}
          />
        </label>
        <button className="post-button">Post</button>
      </form>
    </div>
  );
}
export default AddPost;
