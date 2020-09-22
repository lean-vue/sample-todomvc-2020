<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create-todo="createTodo"></TodosInput>
    </header>
    <TodosMain></TodosMain>
    <TodosActionbar></TodosActionbar>
  </section>
</template>

<script>
import TodosInput from '@/components/TodosInput';
import TodosMain from '@/components/TodosMain';
import TodosActionbar from '@/components/TodosActionbar';

export default {
  name: "TodosShell",
  created() {
    this.$store.dispatch('loadTodos');
  },
  methods: {
    createTodo(title) {
      this.$store.dispatch('createTodo', title);
    },
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>