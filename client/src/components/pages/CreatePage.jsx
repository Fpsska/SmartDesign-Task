import React from "react";
import FilterMenu from "../filtermenu/FilterMenu";
import Modal from "../modal/Modal";

const CreatePage = () => {
    return (
        <div className="create">
            <div className="create__wrapper">
                <h1 className="title">CREATE PAGE</h1>
                <div className="create__section">
                    <FilterMenu />
                    <button className="create__button">Добавить новый товар</button>
                </div>
            </div>
            <Modal/>
        </div>
    )
}

export default CreatePage;