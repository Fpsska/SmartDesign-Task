import React, { useState } from "react";
import { Spring, animated } from "react-spring";
import { FetchMongoData } from "../../hooks/request";
import "./modal.scss"

const Modal = ({ isVisible, setVisibleStatus }) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const { loading, error, request } = FetchMongoData()

    const selectFile = (e) => {
        setPreview(e.target.files[0].name)
    }

    const addGood = async () => {
        const newItem = { name, price, preview }
        try {
            const data = await request("POST", "http://localhost:8080/cards", newItem)
            console.log(data)
            console.log("New Item Added!")
        } catch (error) { }
        setVisibleStatus(false)
    }

    const closeModal = () => {
        setVisibleStatus(false)
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
                                <button className="modal__button modal__button--add" onClick={addGood}>Добавить</button>
                                <button className="modal__button modal__button--close" onClick={closeModal}>Закрыть</button>
                            </div>

                        </div>
                    </animated.div>
                )
            }
        </Spring>
    )
}

export default Modal;