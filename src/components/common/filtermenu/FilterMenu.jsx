import React, { useRef } from "react"
import "./filtermenu.scss"

const FilterMenu = (props) => {

    const {
        loading,
        sortedItems,

        isCreatePage,
        setManufacturer,
        setBrand,
        setFilteredData
    } = props;

    const formRef = useRef(!null);

    const resetFilters = (e) => {
        e.preventDefault();

        setFilteredData(sortedItems);

        // clear form
        formRef.current.reset();
    }


    return (
        <form className="filter" onSubmit={e => resetFilters(e)} ref={formRef}>
            <div className="filter__column">
                <h4 className="filter__title">Manufacturer</h4>
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
            </div>
            <div className="filter__column">
                <h4 className="filter__title">Brand</h4>
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
            </div>
            {
                isCreatePage ?
                    <></>
                    :
                    <button className="filter__button" disabled={loading}>reset filters</button>
            }
        </form>
    )
}

export default FilterMenu;