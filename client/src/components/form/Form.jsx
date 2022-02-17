import React from "react";
import "./form.scss";

const Form = ({ enteredSearchValue, setEnteredSearchValue, loading }) => {
  return (
    <form className="form" action="#">
      <input
        className="form__input"
        type="text"
        placeholder="Search..."
        disabled={loading ? true : ""}
        value={enteredSearchValue.trim()}
        onChange={(e) => setEnteredSearchValue(e.target.value)}
      />
      <button className="form__button" disabled={loading ? true : ""}>submit</button>
    </form>
  );
};

export default Form;
