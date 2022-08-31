import React, { useState, useRef } from "react";
import { useDataFetch } from "../../hooks/useDataFetch";
import FilterMenu from "../filtermenu/FilterMenu";
import "./createform.scss";

const CreateForm = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");

  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");

  const [isDisabled, setDisabledStatus] = useState(false);
  const [isCreatePage, setCreatePageStatus] = useState(true);

  const { request } = useDataFetch();

  const formRef = useRef(!null);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // send POST request
    const newItem = { name, price, preview, manufacturer, brand };

    const response = await request(
      "POST",
      "https://backend-smart-design-task.herokuapp.com/cards",
      newItem
    );
    console.log('sended data:', response);
    alert("New good is successfully added! See on homepage!");

    // clear form
    formRef.current.reset();
    setName("");
    setPrice("");
    setPreview("");
  };

  return (
    <form
      className="create-from"
      onSubmit={e => handleFormSubmit(e)}
      ref={formRef}
    >
      <div className="filter">
        <FilterMenu
          isCreatePage={isCreatePage}
          setManufacturer={setManufacturer}
          setBrand={setBrand}
        />
      </div>

      <fieldset className="create-form__inputs">
        <label className="create-from__label">
          <span>Name</span>
          <input
            className="create-from__input"
            type="text"
            disabled={isDisabled}
            required
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </label>

        <label className="create-from__label">
          <span>Price</span>
          <input
            className="create-from__input"
            type="number"
            disabled={isDisabled}
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label className="create-from__label">
          <span>Photo</span>
          <input
            className="create-from__input create-from__input--file"
            type="file"
            required
            disabled={isDisabled}
            onChange={e => setPreview(e.target.files[0].name)}
          />
        </label>
      </fieldset>

      <button
        className="create-from__button"
        disabled={isDisabled}
      >
        Add new good
      </button>
    </form>
  );
};

export default CreateForm;
