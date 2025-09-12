import {useState} from "react";

    export function  TodoGenerator(props) {
    const [text, setText] = useState("")

    function addItem(id, text) {
        props.dispatch({type: "ADD", id: id, text: text})
        props.setId(id+1)
    }

    return <div className="todo-generator-container">
        <input className="todo-generator-input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button className="todo-generator-button" onClick={() => addItem(props.id, text)}>add</button>
    </div>;
}