import React, { useContext } from "react";
import { Context } from "../DataContext";
function AddPost() {
  const {
    feed,
    dispatch,
    postList,
    setPostDescription,
    postDescription,
    postImage,
    setPostImage
  } = useContext(Context);

  function addNEwPost(e) {
    e.preventDefault();
    dispatch({ type: "ADD", feed: feed, ...postList });
  }

  return (
    <div className="new-post">
      <h3>New post :</h3>
      <form className="form-add" onSubmit={addNEwPost}>
        <textarea
          placeholder="Say what’s on your mind..."
          name="description"
          value={postDescription}
          onChange={(e) => setPostDescription(e.currentTarget.value)}
        />
        <label>
          <span className="label-text">Picture url :</span>
          <input type="url" name="picture" value={postImage} onChange={(e) => setPostImage(e.currentTarget.value)}/>
        </label>
        <button className="post-button">Post</button>
      </form>
    </div>
  );
}
export default AddPost;
