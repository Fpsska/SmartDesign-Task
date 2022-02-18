import React from "react";
import "./modal.scss"

const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__wrapper">

                <h2 className="title title--modal">Добавить товар</h2>

                <div className="modal__inputs">
                    <input className="modal__input modal__input--name" type="text" placeholder="Введите название нового товара.." />
                    <input className="modal__input modal__input--price" type="text" placeholder="Введите стоимость товара.." />
                </div>

                <div className="modal__nav">
                    <button className="modal__button modal__button--add">Добавить</button>
                    <button className="modal__button modal__button--close">Закрыть</button>
                </div>

            </div>
        </div>
    )
}

export default Modal;