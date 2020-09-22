import {createTodo, deleteTodo, getAllTodos, updateTodo} from '@/api/local-persistence';

export default {
    namespaced: true,

    state: {
        list: []
    },

    getters: {
        list: state => state.list,
        hasTodos: state => state.list.length > 0,
        isAllDone: state => state.list.findIndex(t => !t.completed) === -1,
        hasNoCompletedTodos: state => state.list.findIndex(t => t.completed) !== -1,
        activeCount: state => state.list.reduce((count, t) => t.completed ? count : count + 1, 0),
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
        },
        todoRemoved(state, id) {
            state.list = state.list.filter(t => t.id !== id);
        }
    },

    // actions, may be asynchronous, commit mutations
    actions: {
        load({ commit }) {
            getAllTodos().then(todos => commit('todosLoaded', todos));
        },
        async create({ commit }, title) {
            const todo = await createTodo(title);
            commit('todoCreated', todo);
        },
        async toggle(context, id) {
            const todo = context.state.list.find(t => t.id === id);
            const updatedTodo = await updateTodo(id, {completed: !todo.completed});
            context.commit('todoUpdated', updatedTodo);
        },
        async update(context, { id, title }) {
            const updatedTodo = await updateTodo(id, {title});
            context.commit('todoUpdated', updatedTodo);
        },
        async destroy({ commit }, id) {
            await deleteTodo(id);
            commit('todoRemoved', id);
        }
    }
}