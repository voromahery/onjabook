import React from "react";
function AddPost() {
  return (
    <div className="new-post">
      <h3>New post :</h3>
      <form>
        <textarea placeholder="Say what’s on your mind..." />
        <label>
          <span>Picture url :</span>
          <input type="url" />
        </label>
        <button class="post-button">Post</button>
      </form>
    </div>
  );
}
export default AddPost;
