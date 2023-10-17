import React from "react";

export const UserRegistration = ({
  username,
  userId,
  handleUsernameChange,
  handleUserIdChange,
  handleUserAddClick
}) => {
  return (
    <div class="user-area">
      <h2>ユーザー新規登録</h2>
      <input
        placeholder="ユーザー名"
        value={username}
        onChange={handleUsernameChange}
      />
      <input placeholder="ID" value={userId} onChange={handleUserIdChange} />
      <button onClick={handleUserAddClick}> 追加 </button>
    </div>
  );
};
