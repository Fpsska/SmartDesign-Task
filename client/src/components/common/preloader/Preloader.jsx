import React from "react";
import "./preloader.scss";

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;