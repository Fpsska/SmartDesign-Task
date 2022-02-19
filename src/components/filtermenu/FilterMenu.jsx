import React, { useState } from "react";
import { FetchMongoData } from "../../hooks/request";

import "./filtermenu.scss"

const FilterMenu = ({ isVisible, setVisibleStatus }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const [manufacturer, setManufacturer] = useState("")
    const [brand, setBrand] = useState("")
    const { loading, error, request } = FetchMongoData()

    const [isSelected, setSelectedStatus] = useState(false)

    const selectFile = (e) => {
        setPreview(e.target.files[0].name)
    }

    const addGood = async () => {
        const newItem = { name, price, preview, manufacturer, brand }
        console.log(newItem)
        try {
            // http://localhost:8080/cards
            const data = await request("POST", "https://backend-smart-design-task.herokuapp.com/cards", newItem)
            console.log(data)
            console.log("New Item Added!")
        } catch (error) { }
        setVisibleStatus(false)
    }

    const handleManufacturer = (e) => {
        setManufacturer((e.target.id))
    }

    const handleBrand = (e) => {
        setBrand(e.target.id)
    }

    return (
        <form action="#" onSubmit={(e) => e.preventDefault()} className="filter">
            <div className="filter__column">
                <h4 className="filter__name">Manufacturers</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="nvidia" value="nvidia" required disabled={isVisible ? true : ""} onChange={handleManufacturer} />
                    <label className="filter__value" htmlFor="nvidia">NVIDIA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="amd" value="amd" required disabled={isVisible ? true : ""} onChange={handleManufacturer} />
                    <label className="filter__value" htmlFor="amd">AMD</label>
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Brand</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="msi" required disabled={isVisible ? true : ""} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="msi">MSI</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="palit" required disabled={isVisible ? true : ""} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="palit">PALIT</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="evga" required disabled={isVisible ? true : ""} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="evga">EVGA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="asus" required disabled={isVisible ? true : ""} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="asus">ASUS</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="gigabyte" required disabled={isVisible ? true : ""} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="gigabyte">GIGABYTE</label>
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Name</h4>
                <div className="filter__option">
                    <input className="filter__name" type="text" required disabled={isVisible ? true : ""} value={name} onChange={e => setName((e.target.value).toUpperCase())} />
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Price</h4>
                <div className="filter__option">
                    <input className="filter__price" type="number" required disabled={isVisible ? true : ""} value={price} onChange={e => setPrice(e.target.value)} />
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Photo</h4>
                <div className="filter__option">
                    <input className="filter__input--file" type="file" required disabled={isVisible ? true : ""} onChange={selectFile} />
                </div>
            </div>
            <button className="create__button" disabled={isVisible ? true : ""} onClick={addGood}>Add new good</button>
        </form>
    )
}

export default FilterMenu;