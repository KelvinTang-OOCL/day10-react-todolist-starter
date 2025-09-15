import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {deleteTodo, getTodo, updateTodo} from "../apis/api";
import {message} from "antd";

export function  TodoItem(props) {
    const {dispatch} = useContext(TodoContext);

    function toggleDone(id) {
        const targetTodo = getTodo(id)
        const updatedTodo = {...targetTodo, done: true}
        updateTodo(id, updatedTodo).then(() => {
                dispatch({type: "DONE", id: id})
        })
    }

    function deleteItem(id) {
        deleteTodo(id).then(() => {
                message.success("Delete item successfully!")
                dispatch({type: "DELETE", id: id})
        })
    }

    return <div className="todo-item-container">
        <div
            className={`todo-item ${props.done?"done":""}`}
            onClick={() => {
                toggleDone(props.id)
            }}>
            {props.text}
        </div>
        <button
            onClick={() => {
                deleteItem(props.id)
            }}>
            X
        </button>
    </div>;

}