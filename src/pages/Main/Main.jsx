import React, { useEffect } from "react";
import style from "./Main.module.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Todo from "../../components/Todo/Todo";

const Main = ({ todos }) => {
    const [modal, setModal] = useState(false);
    const [todoNumber, setTodoNumber] = useState(-1);

    const modalIsActive = (index) => {
        setModal(true);
        setTodoNumber(index);
    };

    return (
        <section>
            <div className={style.main_todos}>
                {todos.Length !== 0 ? (
                    todos.map((todo, index) => {
                        return (
                            <>
                                <div key={todo.title}>
                                    <Todo
                                        title={todo.title}
                                        description={todo.description}
                                        src={todo.src}
                                        choice={todo.choice}
                                        date={todo.date}
                                        modalIsActive={modalIsActive}
                                        index={index}
                                    />
                                </div>
                                {modal && todoNumber === index ? (
                                        <Modal
                                            title={todo.title}
                                            description={todo.description}
                                            date={todo.date}
                                            choice={todo.choice}
                                            src={todo.src}
                                            isNotActive={setModal}
                                        />
                                ) : (
                                    ""
                                )}
                            </>
                        );
                    })
                ) : (
                    <h1>Туду нет!</h1>
                )}
            </div>
        </section>
    );
};

export default Main;
