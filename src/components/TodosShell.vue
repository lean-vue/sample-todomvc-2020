<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput></TodosInput>
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
    this.$store.dispatch('todos/loadTodos');
  },
  components: {TodosActionbar, TodosMain, TodosInput}
}
</script>

<style scoped>

</style>