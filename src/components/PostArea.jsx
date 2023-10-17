import React from "react";

export const PostArea = ({ post, handlePostChange, handleAddClick }) => {
  return (
    <div class="send-area">
      <input placeholder="投稿内容" value={post} onChange={handlePostChange} />
      <button onClick={handleAddClick}> 投稿 </button>
    </div>
  );
};
