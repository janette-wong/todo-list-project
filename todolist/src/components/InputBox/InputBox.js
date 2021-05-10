import React, { useState } from "react";

export const InputBox = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onClickHandler = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="sd-container">
        <input className="sd" type="date" />
        <span class="open-button">
          <button type="button">📅</button>
        </span>
      </div>
      <div className="post-button">
        <button onClick={onClickHandler}> POST </button>
      </div>
    </div>
  );
};
