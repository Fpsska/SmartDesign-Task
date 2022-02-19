import React, { useState } from "react";
import { FetchMongoData } from "../../hooks/request";

import "./filtermenu.scss"

const FilterMenu = ({ isVisible, setVisibleStatus }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const { loading, error, request } = FetchMongoData()

    const selectFile = (e) => {
        setPreview(e.target.files[0].name)
    }

    const addGood = async () => {
        const newItem = { name, price, preview }
        try {
            const data = await request("POST", "https://backend-smart-design-task.herokuapp.com/cards", newItem)
            console.log(data)
            console.log("New Item Added!")
        } catch (error) { }
        setVisibleStatus(false)
    }

    return (
        <form action="#" onSubmit={(e) => e.preventDefault()} className="filter">
            <div className="filter__column">
                <h4 className="filter__name">Производитель видеопроцессора</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="nvidia" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="nvidia">NVIDIA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="amd" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="amd">AMD</label>
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Бренд</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="msi" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="msi">MSI</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="palit" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="palit">PALIT</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="evga" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="evga">EVGA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="asus" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="asus">ASUS</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="gigabyte" disabled={isVisible ? true : ""} />
                    <label className="filter__value" htmlFor="gigabyte">GIGABYTE</label>
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Название</h4>
                <div className="filter__option">
                    <input className="filter__name" type="text" required disabled={isVisible ? true : ""} value={name} onChange={e => setName(e.target.value)} />
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Цена</h4>
                <div className="filter__option">
                    <input className="filter__price" type="number" required disabled={isVisible ? true : ""} value={price} onChange={e => setPrice(e.target.value)} />
                </div>
            </div>

            <div className="filter__column">
                <h4 className="filter__name">Фотография товара</h4>
                <div className="filter__option">
                    <input className="filter__input--file" type="file" required disabled={isVisible ? true : ""} onChange={selectFile} />
                </div>
            </div>
            <button className="create__button" disabled={isVisible ? true : ""} onClick={addGood}>Добавить новый товар</button>
        </form>
    )
}

export default FilterMenu;