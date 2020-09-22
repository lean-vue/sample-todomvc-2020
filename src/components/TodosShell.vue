<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create-todo="createTodo"></TodosInput>
    </header>
    <TodosMain :todos="todos" @toggle-todo="toggleTodo"></TodosMain>
    <TodosActionbar></TodosActionbar>
  </section>
</template>

<script>
import TodosInput from '@/components/TodosInput';
import TodosMain from '@/components/TodosMain';
import TodosActionbar from '@/components/TodosActionbar';
import {createTodo, getAllTodos, updateTodo} from '@/api/local-persistence';

export default {
  name: "TodosShell",
  data: () => ({
    todos: []
  }),
  async created() {
    this.todos = await getAllTodos();
  },
  methods: {
    async createTodo(title) {
      const todo = await createTodo(title);
      this.todos.push(todo);
    },
    async toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      await updateTodo(id, { completed: !todo.completed });
      todo.completed = !todo.completed;
    }
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>