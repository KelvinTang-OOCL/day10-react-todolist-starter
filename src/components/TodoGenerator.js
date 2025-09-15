import {useContext, useState} from "react";
import {addTodo} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";
import {message} from "antd";

export function  TodoGenerator() {
    const [text, setText] = useState("")
    const {dispatch} = useContext(TodoContext);

    function addItem(text){
        if (text.trim()) {
            const newTodo = {
                done: false,
                text: text.trim()
            }
            addTodo(newTodo)
                .then((response) => {
                    message.success("Add item successfully!")
                    dispatch({type:'ADD', todo: response.data})
                    setText('')
                })
        }
    }

    return <div className="todo-generator-container">
        <input className="todo-generator-input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button className="todo-generator-button" onClick={() => addItem(text)}>add</button>
    </div>;
}