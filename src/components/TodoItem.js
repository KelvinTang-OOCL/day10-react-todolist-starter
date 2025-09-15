import {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {deleteTodo, updateTodo} from "../apis/api";
import {Button, message, Modal} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export function TodoItem(props) {
    const {todos, dispatch} = useContext(TodoContext);
    const [text, setText] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setText(props.text);
        setIsModalOpen(true);
    };

    function handleOk(){
        const targetTodo = todos.find(todo => todo.id === props.id);
        const updatedTodo = {...targetTodo, text: text.trim()}
        updateTodo(props.id, updatedTodo).then(() => {
            message.success("Update item successfully!")
            dispatch({type: "EDIT", id: props.id, text: updatedTodo.text})
            setIsModalOpen(false);
        })
    }

    function handleCancel(){
        setIsModalOpen(false);
    }

    async function toggleDone(id) {
        const targetTodo = todos.find(todo => todo.id === id);
        const updatedTodo = {...targetTodo, done: !targetTodo.done}
        updateTodo(props.id, updatedTodo).then(() => dispatch({type: "DONE", id: props.id}))
    }

    function deleteItem(id) {
        deleteTodo(id).then(() => {
            message.success("Delete item successfully!")
            dispatch({type: "DELETE", id: id})
        })
    }

    return <div className="todo-item-container">
        <div
            className={`todo-item ${props.done ? "done" : ""}`}
            onClick={()=>{toggleDone(props.id)}}>
        {props.text}
    </div>
    <Button
        onClick={showModal}
        icon = <EditOutlined/>
    />
    <Button
        onClick={() => {deleteItem(props.id)}}
        icon = <DeleteOutlined/>
    />

    <Modal
        title="Basic Modal"
        closable={{'aria-label': 'Custom Close Button'}}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
    >
        <input className="todo-edit-input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
    </Modal>
</div>;

}