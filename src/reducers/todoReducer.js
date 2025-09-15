export const initialState = [];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "DONE":
            return state.map(todo => {
                if(action.id === todo.id) {
                    const done = !todo.done
                    return {...todo, done: done}
                }
                return todo
            });
        case "ADD":
            return [
                ...state, action.todo
            ];
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, text: action.text }
                    : todo
            );
        case "DELETE":
            return state.filter(todo => todo.id !== action.id);
        case "LOAD":
            return action.todos
        default:
            return state;
    }
};
