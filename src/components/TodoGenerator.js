export function  TodoGenerator(props) {
    function addItem(id, text) {
        props.dispatch({type: "ADD", id: id, text: text})
    }

    return <div className="todo-generator-container">
        <input className="todo-generator-input"/>
        <button className="todo-generator-button">add</button>
    </div>;
}