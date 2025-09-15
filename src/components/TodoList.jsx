import {TodoContext} from "../contexts/TodoContext";
import {useReducer} from "react";
import "./TodoList.css";
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {initialState, todoReducer} from "../reducers/todoReducer";

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const value = {todos, dispatch}

    return <div className={"todo-list"}>
        <TodoContext.Provider value={value}>
            <TodoGroup/>
            <TodoGenerator/>
        </TodoContext.Provider>
    </div>
}

export default TodoList