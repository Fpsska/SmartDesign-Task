import React from "react";
import "./input.scss";

const Input = ({ enteredSearchValue, setEnteredSearchValue, loading }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Search..."
      disabled={loading ? true : ""}
      value={enteredSearchValue}
      onChange={(e) => setEnteredSearchValue(e.target.value.trim())}
    />
  );
};

export default Input;
