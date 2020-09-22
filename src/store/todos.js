import {createTodo, getAllTodos, updateTodo} from '@/api/local-persistence';

export default {
    state: {
        list: []
    },

    // mutations, synchronous state changes
    mutations: {
        todosLoaded(state, todos) {
            state.list = todos;
        },
        todoCreated(state, todo) {
            state.list.push(todo);
        },
        todoUpdated(state, todo) {
            const todoToUpdate = state.list.find(t => t.id === todo.id);
            Object.assign(todoToUpdate, todo);
        }
    },

    // actions, may be asynchronous, commit mutations
    actions: {
        loadTodos({ commit }) {
            getAllTodos().then(todos => commit('todosLoaded', todos));
        },
        async createTodo({ commit }, title) {
            const todo = await createTodo(title);
            commit('todoCreated', todo);
        },
        async toggleTodo(context, id) {
            const todo = context.state.list.find(t => t.id === id);
            const updatedTodo = await updateTodo(id, {completed: !todo.completed});
            context.commit('todoUpdated', updatedTodo);
        }
    }
}