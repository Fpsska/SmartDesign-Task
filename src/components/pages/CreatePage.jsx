import React from "react";
import CreateForm from "../createform/CreateForm";

const CreatePage = () => {
    return (
        <div className="create">
            <div className="create__wrapper">
                <h1 className="title">CREATE PAGE</h1>
                <div className="create__section">
                    <CreateForm />
                </div>
            </div>
        </div>
    )
}

export default CreatePage;