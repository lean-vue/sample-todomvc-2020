<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create-todo="createTodo"></TodosInput>
    </header>
    <TodosMain :todos="state.list"></TodosMain>
    <TodosActionbar></TodosActionbar>
  </section>
</template>

<script>
import TodosInput from '@/components/TodosInput';
import TodosMain from '@/components/TodosMain';
import TodosActionbar from '@/components/TodosActionbar';

import store from '@/store/todos';

export default {
  name: "TodosShell",
  data: () => ({
    state: store.state
  }),
  created() {
    store.actions.loadTodos();
  },
  methods: {
    createTodo(title) {
      store.actions.createTodo(title);
    },
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>