import React from "react";
import style from "./Searchinput.module.scss";

const Searchinput = ({ search, setSearch }) => {
    return (
        <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
        />
    );
};

export default Searchinput;
