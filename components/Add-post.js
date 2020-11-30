import React from "react";
function AddPost() {

  return (
    <div className="new-post">
      <h3>New post :</h3>
      <form className="form-add">
        <textarea placeholder="Say what’s on your mind..." />
        <label>
          <span className="label-text">Picture url :</span>
          <input type="url" />
        </label>
        <button className="post-button">Post</button>
      </form>
    </div>
  );
}
export default AddPost;
