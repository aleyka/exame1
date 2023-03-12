import React from "react";
import style from "./AddTodo.module.scss";
import search from "../../assets/search-found.png";
import plus from "../../assets/plus.png";
import { smilelist } from "../../constans/smilelist";
import { createClient } from "pexels";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import check from "../../assets/check.png";

const AddTodo = ({ todos, setTodos }) => {
    const [photos, setPhotos] = useState([]);
    const [searchImg, SetSearchImg] = useState("");

    const client = createClient(
        "MFsu7P7aI9sbuUwxwUkdyqIQZKc5OM1fogK0JSQF9EErM1StdczOLZMR "
    );

    const getPhotos = (query) => {
        client.photos.search({ query, per_page: 5 }).then((photos) => {
            setPhotos(photos.photos);
        });
    };

    const getPhotosBtn = () => {
        if (searchImg.trim() === "") {
            alert("Поле ввода пустое!");
        } else {
            getPhotos(searchImg);
            SetSearchImg('')
        }
    };

    useEffect(() => {
        getPhotos("Nature");
    }, []);

    //****************************** */
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        date: "",
        choice: "😊",
        src: "",
    });
    const [todoImg, setTodoImg] = useState(-1);

    const navigate = useNavigate();
    const todoAdd = (e) => {
        e.preventDefault();
        if (
            todo.title.trim() === "" ||
            todo.description.trim() === "" ||
            todo.date.trim() === "" ||
            todo.choice.trim() === "" ||
            todo.src.trim() === ""
        ) {
            alert("Заполните все поля и выберете фотографию!");
        } else {
            setTodos([...todos, todo]);
            navigate("/");
        }
    };

    const imgActive = (index) => {
        if (todoImg === index) {
            return style.imgActive;
        } else {
            return style.imgNotActive;
        }
    };
    return (
        <section>
            <div className="container">
                <div className={style.mainTodo}>
                    <div className={style.mainTodo_left}>
                        <input
                            type="text"
                            placeholder="Название"
                            value={todo.title}
                            onChange={(e) =>
                                setTodo({ ...todo, title: e.target.value })
                            }
                        />
                        <div>
                            <select
                                value={todo.choice}
                                onChange={(e) =>
                                    setTodo({ ...todo, choice: e.target.value })
                                }
                            >
                                {smilelist.map((option) => {
                                    return (
                                        <option value={option} key={option}>
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                type="date"
                                placeholder="Дата"
                                value={todo.date}
                                onChange={(e) =>
                                    setTodo({ ...todo, date: e.target.value })
                                }
                            />
                        </div>
                        <div className={style.mainTodo_left_description}>
                            <input
                                type="text"
                                placeholder="Описание"
                                value={todo.description}
                                onChange={(e) =>
                                    setTodo({
                                        ...todo,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <form
                            onSubmit={todoAdd}
                            className={style.mainTodo_left_btn}
                        >
                            <button type="submit">
                                <img src={plus} alt="plus icon" />
                                <span>Создать</span>
                            </button>
                        </form>
                    </div>

                    <div className={style.mainTodo_right}>
                        <div className={style.mainTodo_search}>
                            <input
                                value={searchImg}
                                onChange={(e) => SetSearchImg(e.target.value)}
                                type="text"
                                placeholder="Поиск"
                            />
                            <button onClick={() => getPhotosBtn()}>
                                <img src={search} alt="search" />
                            </button>
                        </div>
                        <div className={style.images}>
                            {photos.map((photo, index) => {
                                return (
                                    <div
                                        onClick={() => setTodoImg(index)}
                                        key={photo.id}
                                        className={style.image}
                                    >
                                        <div className={imgActive(index)}>
                                            <span>
                                                <img src={check} alt="check" />
                                            </span>
                                        </div>
                                        <img
                                            onClick={(e) =>
                                                setTodo({
                                                    ...todo,
                                                    src: e.target.src,
                                                })
                                            }
                                            src={photo.src.original}
                                            alt="photo"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddTodo;
