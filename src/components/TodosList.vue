<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodosItem>
  </ul>
</template>

<script>
import TodosItem from '@/components/TodosItem';

export default {
  name: "TodosList",
  components: {TodosItem},
  computed: {
    todos() {
      return this.$store.state.todos.list;
    }
  }
}
</script>

<style scoped>

</style>