import React from "react";
import "./filtermenu.scss"

const FilterMenu = () => {
    return (
        <div className="filter">

            <div className="filter__column">
                <h4 className="filter__name">Производитель видеопроцессора</h4>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="nvidia" />
                    <label className="filter__value" htmlFor="nvidia">NVIDIA</label>
                </div>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="manufacturer" id="amd" />
                    <label className="filter__value" htmlFor="amd">AMD</label>
                </div>

            </div>

            <div className="filter__column">

                <h4 className="filter__name">Бренд</h4>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="msi" />
                    <label className="filter__value" htmlFor="msi">MSI</label>
                </div>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="palit" />
                    <label className="filter__value" htmlFor="palit">PALIT</label>
                </div>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="evga" />
                    <label className="filter__value" htmlFor="evga">EVGA</label>
                </div>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="asus" />
                    <label className="filter__value" htmlFor="asus">ASUS</label>
                </div>

                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="gigabyte" />
                    <label className="filter__value" htmlFor="gigabyte">GIGABYTE</label>
                </div>
            </div>
        </div>
    )
}

export default FilterMenu;