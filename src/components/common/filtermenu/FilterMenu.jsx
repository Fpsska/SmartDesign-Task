import React from "react"
import "./filtermenu.scss"

const FilterMenu = (props) => {

    const {
        loading,
        isCreatePage,
        setManufacturer,
        setBrand
    } = props;

    return (
        <>
            <fieldset className="filter__column">
                <legend className="filter__title">Manufacturer</legend>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="producer"
                        id="nvidia"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setManufacturer(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="nvidia">NVIDIA</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="producer"
                        id="amd"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setManufacturer(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="amd">AMD</label>
                </div>
            </fieldset>
            <fieldset className="filter__column">
                <legend className="filter__title">Brand</legend>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="msi"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="create-from__value" htmlFor="msi">MSI</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="palit"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="palit">PALIT</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="evga"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="evga">EVGA</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="asus"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="asus">ASUS</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="gigabyte"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="gigabyte">GIGABYTE</label>
                </div>
                <div className="filter__option">
                    <input
                        className="filter__radio"
                        type="radio"
                        name="brand"
                        id="asrock"
                        required={isCreatePage}
                        disabled={loading}
                        onChange={e => setBrand(e.target.id)}
                    />
                    <label className="filter__label" htmlFor="asrock">ASROCK</label>
                </div>
            </fieldset>
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