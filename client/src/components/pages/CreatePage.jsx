import React from "react";
import { useState } from "react";
import FilterMenu from "../filtermenu/FilterMenu";
import Modal from "../modal/Modal";

const CreatePage = () => {
    const [isVisible, setVisibleStatus] = useState(false);

    return (
        <div className="create">
            <div className="create__wrapper">
                <h1 className="title">CREATE PAGE</h1>
                <div className="create__section">
                    <FilterMenu isVisible={isVisible} />
                    <button className="create__button" disabled={isVisible ? true : ""} onClick={() => { setVisibleStatus(true) }}>Добавить новый товар</button>
                </div>
                <div className="create__modal">
                    {isVisible ?
                        <Modal isVisible={isVisible} setVisibleStatus={setVisibleStatus} />
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePage;