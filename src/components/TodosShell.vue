<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create-todo="createTodo"></TodosInput>
    </header>
    <TodosMain :todos="todos"></TodosMain>
    <TodosActionbar></TodosActionbar>
  </section>
</template>

<script>
import TodosInput from '@/components/TodosInput';
import TodosMain from '@/components/TodosMain';
import TodosActionbar from '@/components/TodosActionbar';
import {createTodo, getAllTodos} from '@/api/local-persistence';

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
    }
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>