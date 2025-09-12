import {TodoContext} from "../contexts/TodoContext";
import {useContext, useState} from "react";
import "./TodoList.css";
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [id, setId] = useState(state.length+1)
    return <div className={"todo-list"}>
        <TodoGroup state={state} dispatch={dispatch} />
        <TodoGenerator dispatch={dispatch} id={id} setId={setId}/>
    </div>
}

export default TodoList