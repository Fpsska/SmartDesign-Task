import React from "react"
import "./filtermenu.scss"

const FilterMenu = ({ loading, isCreatePage, setManufacturer, setBrand, sortByManufacturer, sortByBrand }) => {

    const handleManufacturer = (e) => {
        if (isCreatePage === true) {
            setManufacturer(e.target.id)
        } else {
            sortByManufacturer(e.target.id)
            setManufacturer(e.target.id)
        }
    }

    const handleBrand = (e) => {
        if (isCreatePage === true) {
            setBrand(e.target.id)
        } else {
            setBrand(e.target.id)
            sortByBrand(e.target.id)
        }
    }

    return (
        <>
            <div className="filter__column">
                <h4 className="filter__title">Manufacturer</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="producer" id="nvidia" required={isCreatePage} disabled={loading} onChange={handleManufacturer} />
                    <label className="filter__value" htmlFor="nvidia">NVIDIA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="producer" id="amd" required={isCreatePage} disabled={loading} onChange={handleManufacturer} />
                    <label className="filter__value" htmlFor="amd">AMD</label>
                </div>
            </div>
            <div className="filter__column">
                <h4 className="filter__title">Brand</h4>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="msi" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="create-from__value" htmlFor="msi">MSI</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="palit" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="palit">PALIT</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="evga" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="evga">EVGA</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="asus" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="asus">ASUS</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="gigabyte" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="gigabyte">GIGABYTE</label>
                </div>
                <div className="filter__option">
                    <input className="filter__radio" type="radio" name="brand" id="asrock" required={isCreatePage} disabled={loading} onChange={handleBrand} />
                    <label className="filter__value" htmlFor="asrock">ASROCK</label>
                </div>
            </div>
            {
                isCreatePage ?
                    <></>
                    :
                    <button className="filter__button" disabled={loading}>reset filters</button>
            }
        </>
    )
}

export default FilterMenu;