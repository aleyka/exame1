import React from "react";
import style from "./Todo.module.scss";

const Todo = ({
    title,
    description,
    date,
    choice,
    src,
    modalIsActive,
    index,
}) => {
    return (
        <div onClick={() => modalIsActive(index)} className={style.main_todo}>
            <div className={style.background}>
                <img src={src} alt="background" />
            </div>
            <div className={style.smile}>
                <span>{choice}</span>
            </div>
            <div className={style.text}>
                <div>
                    <h4>{title}</h4>
                    <p>{date}</p>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Todo;
