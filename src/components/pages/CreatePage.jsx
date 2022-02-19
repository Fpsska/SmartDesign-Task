import React from "react";
import { useState } from "react";
import FilterMenu from "../filtermenu/FilterMenu";

const CreatePage = () => {
    const [isVisible, setVisibleStatus] = useState(false);

    return (
        <div className="create">
            <div className="create__wrapper">
                <h1 className="title">CREATE PAGE</h1>
                <div className="create__section">
                    <FilterMenu isVisible={isVisible} setVisibleStatus={setVisibleStatus} />
                </div>
            </div>
        </div>
    )
}

export default CreatePage;