// Local Persistence

// Persistence API
//
// async getAllTodos(): Todos[]
// async createTodo(title: string): Todo
// async updateTodo(id, changes: Todo): Todo
// async deleteTodo(id): void

import axios from 'axios';

const baseUrl = 'http://localhost:3000/todos';

export async function getAllTodos() {
    const response  = await axios.get(baseUrl);
    return response.data;
}

export async function createTodo(title) {
    const response  = await axios.post(baseUrl, { title, completed: false });
    return response.data;
}

export async function updateTodo(id, changes) {
    const response  = await axios.patch(baseUrl + '/' + id, changes);
    return response.data;
}

export async function deleteTodo(id) {
    return axios.delete(baseUrl + '/' + id);
}
