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

  const form = useRef(null);

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
    form.current.reset();
    setName("");
    setPrice("");
    setPreview("");
    alert("New good is successfully added! See Search Page!");
  };

  return (
    <form
      className="create-from"
      action=""
      onSubmit={handleFormSubmit}
      ref={form}
    >
      <div className="filter">
        <FilterMenu
          isCreatePage={isCreatePage}
          setManufacturer={setManufacturer}
          setBrand={setBrand}
        />
      </div>
      <div className="create-from__column">
        <h4 className="create-from__name">Name</h4>
        <div className="create-from__option">
          <input
            className="create-from__name"
            type="text"
            required
            disabled={isDisabled ? true : ""}
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <div className="create-from__column">
        <h4 className="create-from__name">Price</h4>
        <div className="create-from__option">
          <input
            className="create-from__price"
            type="number"
            required
            disabled={isDisabled ? true : ""}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="create-from__column">
        <h4 className="create-from__name">Photo</h4>
        <div className="create-from__option">
          <input
            className="create-from__input--file"
            type="file"
            required
            disabled={isDisabled ? true : ""}
            onChange={selectFile}
          />
        </div>
      </div>
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
