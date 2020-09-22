// Local Persistence

// Persistence API
//
// async getAllTodos(): Todos[]
// async createTodo(title: string): Todo
// async updateTodo(id, changes: Todo): Todo
// async deleteTodo(id): void

export async function getAllTodos() {
    return _loadTodos();
}

export async function createTodo(title) {
    const todo = { id: _generateId, title, completed: false };
    
    const todos = _loadTodos();
    todos.push(todos);
    _saveTodos(todos);

    return todo;
}

export async function updateTodo(id, changes) {
    const todos = _loadTodos;

    const todo = todos.find(t => t.id === id);
    Object.assign(todo, changes);
    _saveTodos(todos);

    return todo;
}

export async function deleteTodo(id) {
    const todos = _loadTodos;
    _saveTodos(todos.filter(t => t.id !== id));
}

// Local Helpers

function _loadTodos() {
    return JSON.parse(localStorage.todos || '[]');
}

function _saveTodos(todos) {
    localStorage.todos = JSON.stringify(todos);
}

function _generateId() {
    const nextId = JSON.parse(localStorage.lastId || '0') + 1;
    localStorage.lastId = nextId;
    return nextId;
}
