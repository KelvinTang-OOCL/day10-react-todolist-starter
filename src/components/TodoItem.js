export function  TodoItem(props) {
    function toggleDone(id) {
        props.dispatch({type: "DONE", id: id})
    }

    function deleteItem(id) {
        props.dispatch({type: "DELETE", id: id})
    }

    return <div className="todo-item-container">
        <div className={`todo-item ${props.done?"done":""}`} onClick={() => toggleDone(props.id)}>{props.text} </div>
        <button onClick={() => deleteItem(props.id)}>X</button>
    </div>;

}