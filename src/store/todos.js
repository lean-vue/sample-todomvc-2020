import {createTodo, getAllTodos, updateTodo} from '@/api/local-persistence';

const state = {
    list: []
};

export default {
    state,
    actions: {
        loadTodos() {
            getAllTodos().then(todos => state.list = todos);
        },
        async createTodo(title) {
            const todo = await createTodo(title);
            state.list.push(todo);
        },
        async toggleTodo(id) {
            const todo = state.list.find(t => t.id === id);
            await updateTodo(id, { completed: !todo.completed });
            todo.completed = !todo.completed;
        }
    }
}