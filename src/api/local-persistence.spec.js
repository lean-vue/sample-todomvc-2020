import {createTodo, deleteTodo, getAllTodos, updateTodo} from './local-persistence.js';

describe('Local Persistence', () => {

    it('load initially zero todos', async () => {
        const todos = await getAllTodos();
        expect(todos.length).toBe(0);
    });

    it('can create todo items', async () => {
        const todo = await createTodo('Integrate testing with @vue/cli');
        expect(todo).toBeDefined();
        expect(todo.id).toBe(1);
        expect(todo.title).toBe('Integrate testing with @vue/cli');
        expect(todo.completed).toBeFalsy();
    });

    it('can update todo items', async () => {
        const todo = await createTodo('Unit Testing');
        const updatedTodo = await updateTodo(todo.id, { completed: true });

        expect(updatedTodo.completed).toBeTruthy();
    });

    it('can delete todo items', async () => {
        await deleteTodo(1);

        const todos = await getAllTodos();
        expect(todos.length).toBe(1);
    });
});
