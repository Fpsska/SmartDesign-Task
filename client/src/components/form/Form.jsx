import React from "react";
import "./form.scss";

const Form = ({ enteredSearchValue, setEnteredSearchValue }) => {
  return (
    <form className="form" action="#">
      <input
        className="form__input"
        type="text"
        placeholder="Search..."
        value={enteredSearchValue.trim()}
        onChange={(e) => setEnteredSearchValue(e.target.value)}
      />
      <button className="form__button">submit</button>
    </form>
  );
};

export default Form;
