import React, { useState } from "react";
import {useParams} from "react-router";

export const InputBox = ({ onAdd }) => {
  const [text, setText] = useState();
  const [date, setDate] = useState(new Date());
  const {username} = useParams();

  const onClickHandler = () => {
    if (text != null && date != null) {
      onAdd({ name: text, date: date, username: username });
      setText("");
      setDate("");
    }
  };

  const handleDateChange = (data) => {
    setDate(data.target.value);
  };

  return (
    <div className="input-box">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="sd-container">
        <input
          className="sd"
          type="date"
          value={date}
          onChange={handleDateChange}
        />
        <span className="open-button">
          <button type="button">📅</button>
        </span>
      </div>
      <div className="post-button">
        <button onClick={onClickHandler}> POST </button>
      </div>
    </div>
  );
};
