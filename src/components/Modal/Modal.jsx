import React from "react";
import style from "./Modal.module.scss";

const Modal = ({ title, description, date, choice, src, isNotActive }) => {
    return (
        <div className={style.main_modal}>
            <div className={style.modal_opacity}></div>
            <div className={style.modal}>
                <div className={style.exit_modal}>
                    <span onClick={() => isNotActive(false)}>x</span>
                </div>
                <div className={style.modal_top}>
                    <div>
                        <h2>{choice}</h2>
                        <h2>{title}</h2>
                    </div>
                    <p>{date}</p>
                </div>
                <div className={style.modal_bottom}>
                    <div>
                        <img src={src} alt="image" />
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
