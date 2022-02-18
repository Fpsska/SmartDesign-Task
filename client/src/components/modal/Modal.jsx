import React, { useState } from "react";
import { Spring, animated } from "react-spring";
import "./modal.scss"

const Modal = ({ isVisible, setVisibleStatus }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <Spring
            from={{ transform: "translateX(50%)" }}
            to={{ transform: "translateX(-200%)" }}
            config={{ duration: 360 }}
            reverse={isVisible}
        >
            {
                (styles) => (
                    <animated.div className="modal" style={styles}>
                        <div className="modal__wrapper">

                            <h2 className="title title--modal">Добавить товар</h2>

                            <div className="modal__inputs">
                                <input className="modal__input modal__input--name" type="text" placeholder="Введите название нового товара.." value={name} onChange={e => setName(e.target.value)} />
                                <input className="modal__input modal__input--price" type="text" placeholder="Введите стоимость товара.." value={price} onChange={e => setPrice(e.target.value)} />
                                <input className="modal__input modal__input--file" type="file" onChange={selectFile} />
                            </div>

                            <div className="modal__nav">
                                <button className="modal__button modal__button--add">Добавить</button>
                                <button className="modal__button modal__button--close" onClick={() => { setVisibleStatus(false) }}>Закрыть</button>
                            </div>

                        </div>
                    </animated.div>
                )
            }
        </Spring>
    )
}

export default Modal;