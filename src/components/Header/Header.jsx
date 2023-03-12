import React from "react";
import style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import list from "../../assets/list.png";
import pen from "../../assets/pen.png";
import Searchinput from "../Searchinput/Searchinput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { smilelist } from "../../constans/smilelist";

const Header = ({ filteredTodosHandle, search, setSearch }) => {
    const [select, setSelect] = useState("default");

    const selectFilteredValue = (e) => {
        setSelect(e.target.value);
        filteredTodosHandle(e.target.value);
    };

    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.logo}>
                        <span>
                            <img src={logo} alt="logo" />
                        </span>
                        <h1>Дневник</h1>
                    </div>
                    <div className={style.sortsActive}>
                        <Searchinput search={search} setSearch={setSearch} />
                        <select value={select} onChange={selectFilteredValue}>
                            <option value="default" style={{ fontsize: 30 }}>
                                ☺
                            </option>
                            {smilelist.map((option) => {
                                return (
                                    <option value={option} key={option}>
                                        {option}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={style.tools}>
                        <div>
                            <img src={list} alt="list" />
                            <Link to="/">Список</Link>
                        </div>
                        <div>
                            <img src={pen} alt="pen" />
                            <Link to="./record">Запись</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
