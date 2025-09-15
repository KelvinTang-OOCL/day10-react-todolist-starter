import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {TodoContext} from "./contexts/TodoContext";
import {getTodo, getTodos} from "./apis/api";
import {message} from "antd";

export function TodoDetail() {
    const {id} = useParams()
    const {todos, dispatch} = useContext(TodoContext);
    useEffect(() => {
        getTodo(id).then(response => {
            message.success("Fetch success!")
            dispatch({type: 'LOAD', todos: response.data})
        })
    }, []);






    return <div>
        <div>{todo.id}</div>
        <div>{todo.text}</div>
        <div>{todo.done}</div>
    </div>
}