import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";
import "./TodoList.css";
const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext)

    function toggleDone(id) {
        dispatch({type: "DONE", id: id})
    }

    return (<div className={"todo-group"}>
            <div>This is the TodoList Component.</div>
            {
                state.map(({id, text, done}) => {
                    return  <div className={"todo-item"} onClick={() => toggleDone(id)}>{text} {done+''}</div>
                })
            }
        </div>
    );
}

export default TodoList