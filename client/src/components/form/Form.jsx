import React from "react";
import "./form.scss"

const Form = () => {
    return (
        <form className="form" action="#">
            <input className="form__input" type="text" placeholder="Search..." />
            <button className="form__button">submit</button>
        </form>
    )
}

export default Form;