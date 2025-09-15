import {TodoItem} from "./TodoItem";
import {useContext, useEffect} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {getTodos} from "../apis/api";
import {message} from "antd";

export function TodoGroup() {
    const {todos, dispatch} = useContext(TodoContext);
    useEffect(() => {
        getTodos().then(response => {
            message.success("Query success!")
            dispatch({type: 'LOAD', todos: response.data})
        })
    }, []);

    return (
        <div className={"todo-group"}>
            <h1>Todo List</h1>
            {todos.length === 0 ?
                (<div style={{margin: "20px"}}>Add the things you need to do today...</div>):
                (todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            done={todo.done}
                        />
                    ))
                )
            }
        </div>
    );
}