<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput></TodosInput>
    </header>
    <TodosMain :todos="todos"></TodosMain>
    <TodosActionbar></TodosActionbar>
  </section>
</template>

<script>
import TodosInput from '@/components/TodosInput';
import TodosMain from '@/components/TodosMain';
import TodosActionbar from '@/components/TodosActionbar';
import {getAllTodos} from '@/api/local-persistence';

export default {
  name: "TodosShell",
  data: () => ({
    todos: []
  }),
  async created() {
    this.todos = await getAllTodos();
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>