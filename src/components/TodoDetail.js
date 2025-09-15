import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getTodo} from "../apis/api";
import {message} from "antd";
import {TodoItem} from "./TodoItem";

export function TodoDetail() {
    const { id } = useParams(); // Get the `id` from the URL
    const [todo, setTodo] = useState(null); // State to store the fetched todo

    useEffect(() => {
        getTodo(id)
            .then(response => {
                setTodo(response.data);
                message.success("Fetch success!");
            })
    }, [id])

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Todo Details</h1>
            <p>ID: {todo.id}</p>
            <p>Text: {todo.text}</p>
            <p>Status: {todo.done ? "Done" : "Not Done"}</p>
        </div>
    );
}