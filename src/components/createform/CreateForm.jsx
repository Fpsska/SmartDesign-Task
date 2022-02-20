import React, { useState, useRef } from "react";
import { FetchMongoData } from "../../hooks/request";

import "./createform.scss"

const CreateForm = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const [manufacturer, setManufacturer] = useState("")
    const [brand, setBrand] = useState("")
    const { loading, error, request } = FetchMongoData()

    const [isDisabled, setDisabledStatus] = useState(false)

    const form = useRef(null)

    const selectFile = (e) => {
        setPreview(e.target.files[0].name)
    }

    const addGood = async () => {
        if (name === "" || price === "" || preview === "" || manufacturer === "" || brand === "") {
            return
        } else {
            const newItem = { name, price, preview, manufacturer, brand }
            console.log(newItem)
            try {
                //  https://backend-smart-design-task.herokuapp.com/cards http://localhost:8080/cards
                const data = await request("POST", "https://backend-smart-design-task.herokuapp.com/cards", newItem)
                console.log(data)
            } catch (error) { }
        }
    }

    const handleManufacturer = (e) => {
        setManufacturer((e.target.id))
    }

    const handleBrand = (e) => {
        setBrand(e.target.id)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        form.current.reset()
        setName("")
        setPrice("")
        setPreview("")
        alert("New good is successfully added")
    }

    return (
        <form className="create-from" action="" onSubmit={handleFormSubmit} ref={form} >
            <div className="create-from__column">
                <h4 className="create-from__name">Manufacturers</h4>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="manufacturer" id="nvidia" required disabled={isDisabled ? true : ""} onChange={handleManufacturer} />
                    <label className="create-from__value" htmlFor="nvidia">NVIDIA</label>
                </div>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="manufacturer" id="amd" required disabled={isDisabled ? true : ""} onChange={handleManufacturer} />
                    <label className="create-from__value" htmlFor="amd">AMD</label>
                </div>
            </div>

            <div className="create-from__column">
                <h4 className="create-from__name">Brand</h4>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="brand" id="msi" required disabled={isDisabled ? true : ""} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="msi">MSI</label>
                </div>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="brand" id="palit" required disabled={isDisabled ? true : ""} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="palit">PALIT</label>
                </div>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="brand" id="evga" required disabled={isDisabled ? true : ""} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="evga">EVGA</label>
                </div>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="brand" id="asus" required disabled={isDisabled ? true : ""} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="asus">ASUS</label>
                </div>
                <div className="create-from__option">
                    <input className="create-from__radio" type="radio" name="brand" id="gigabyte" required disabled={isDisabled ? true : ""} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="gigabyte">GIGABYTE</label>
                </div>
            </div>

            <div className="create-from__column">
                <h4 className="create-from__name">Name</h4>
                <div className="create-from__option">
                    <input className="create-from__name" type="text" required disabled={isDisabled ? true : ""} value={name} onChange={e => setName((e.target.value).toUpperCase())} />
                </div>
            </div>

            <div className="create-from__column">
                <h4 className="create-from__name">Price</h4>
                <div className="create-from__option">
                    <input className="create-from__price" type="number" required disabled={isDisabled ? true : ""} value={price} onChange={e => setPrice(e.target.value)} />
                </div>
            </div>

            <div className="create-from__column">
                <h4 className="create-from__name">Photo</h4>
                <div className="create-from__option">
                    <input className="create-from__input--file" type="file" required disabled={isDisabled ? true : ""} onChange={selectFile} />
                </div>
            </div>
            <button className="create-from__button" disabled={isDisabled ? true : ""} onClick={addGood}>Add new good</button>
        </form>
    )
}

export default CreateForm;