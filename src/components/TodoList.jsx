import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";
import "./TodoList.css";
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    return <div className={"todo-list"}>
        <TodoGroup state={state} dispatch={dispatch} />
        <TodoGenerator/>
    </div>
}

export default TodoList