import {TodoContext} from "../contexts/TodoContext";
import {useReducer, useState} from "react";
import "./TodoList.css";
import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";
import {initialState, todoReducer} from "../reducers/todoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [id, setId] = useState(state.length + 1)
    const value = {state, dispatch}
    return <div className={"todo-list"}>
        <TodoContext.Provider value={value}>
            <TodoGroup state={state} dispatch={dispatch}/>
            <TodoGenerator dispatch={dispatch} id={id} setId={setId}/>
        </TodoContext.Provider>
    </div>
}

export default TodoList