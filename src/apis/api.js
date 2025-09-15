import axios from "axios";

const instance = axios.create({
    baseURL: 'https://68c78cc45d8d9f514732240a.mockapi.io/'
})

export const getTodos = async () => {
    return await instance.get('/todos')
}

export const getTodo = async (id) => {
    return await instance.get(`/todos/${id}`)
}

export const addTodo = async (todo) => {
    return await instance.post('/todos', todo)
}

export const updateTodo = async (id, todo) => {
    return await instance.put(`/todos/${id}`, todo)
}

export const deleteTodo = async (id) => {
    return await instance.delete(`/todos/${id}`)
}