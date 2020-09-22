<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodosItem>
  </ul>
</template>

<script>
import TodosItem from '@/components/TodosItem';
import store from '@/store/todos';
export default {
  name: "TodosList",
  components: {TodosItem},
  computed: {
    todos() {
      return store.state.list;
    }
  }
}
</script>

<style scoped>

</style>