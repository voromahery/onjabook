import React, { useContext } from "react";
import { Context } from "../DataContext";
function AddPost() {
  const {
    feed,
    dispatch,
    postDate,
  } = useContext(Context);

  function addNEwPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      description: e.target.description.value,
      postPic: e.target.picture.value,
      userName: "Daniel",
      userPic: "https://portfolio-onja-daniel.netlify.app/images/daniel.jpg",
      comments: [],
      date: postDate.toDateString(),
      like: [],
    };
    dispatch({ type: "POST", feed: [newPost, ...feed] });
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
