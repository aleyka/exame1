import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import AddTodo from "./pages/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import { useState, useMemo, useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [search, setSearch] = useState("");

    const filteredTodosHandle = (value) => {
        if (value !== "default") {
            setFilteredTodos(
                todos.filter((todo) => {
                    return todo.choice === value;
                })
            );
        } else {
            return setFilteredTodos(todos);
        }
    };

    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);

    const searchAndFilteredTodos = useMemo(() => {
        return filteredTodos.filter((todo) =>
            todo.title.toLowerCase().includes(search)
        );
    }, [search, filteredTodos]);

    return (
        <>
            <div className="App">
                <Header
                    filteredTodosHandle={filteredTodosHandle}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<Main todos={searchAndFilteredTodos} />}
                />
                <Route
                    path="/record"
                    element={<AddTodo todos={todos} setTodos={setTodos} />}
                />
                <Route path="*" element="" />
            </Routes>
        </>
    );
}

export default App;
