import { TodoItem } from "./TodoItem";

export function TodoGroup(props) {
    return (

        <div className={"todo-group"}>
            <h1>Todo List</h1>
            {
                props.state.length === 0 ?
                    (<div style={{margin: "20px"}}>Add the things you need to do today...</div>) :
                    (props.state.map(({id, text, done}) => {
                        return <TodoItem key={id} id={id} text={text} done={done} dispatch={props.dispatch}/>;
                    }))
            }
        </div>
    );
}