import React, { useState, useRef } from "react";
import { FetchMongoData } from "../../hooks/request";
import FilterMenu from "../common/filtermenu/FilterMenu";
import "./createform.scss";

const CreateForm = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [brand, setBrand] = useState("");
  const { request } = FetchMongoData();

  const [isDisabled, setDisabledStatus] = useState(false);

  const [isCreatePage, setCreatePageStatus] = useState(true);

  const formRef = useRef(!null);

  const selectFile = (e) => {
    setPreview(e.target.files[0].name);
  };

  const addGood = async () => {
    if (name === "" || price === "" || preview === "" || manufacturer === "" || brand === ""
    ) {
      return;
    } else {
      const newItem = { name, price, preview, manufacturer, brand };
      console.log(newItem);
      try {
        const data = await request(
          "POST",
          "https://backend-smart-design-task.herokuapp.com/cards",
          newItem
        );
        console.log(data);
      } catch (error) { }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // clear form
    formRef.current.reset();
    setName("");
    setPrice("");
    setPreview("");
    alert("New good is successfully added! See Search Page!");
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
            required
            disabled={isDisabled ? true : ""}
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </label>

        <label className="create-from__label">
          <span>Price</span>
          <input
            className="create-from__input"
            type="number"
            required
            disabled={isDisabled ? true : ""}
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
            disabled={isDisabled ? true : ""}
            onChange={selectFile}
          />
        </label>
      </fieldset>

      <button
        className="create-from__button"
        disabled={isDisabled ? true : ""}
        onClick={addGood}
      >
        Add new good
      </button>
    </form>
  );
};

export default CreateForm;
