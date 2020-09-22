<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo"></TodosItem>
  </ul>
</template>

<script>
import TodosItem from '@/components/TodosItem';
import { mapGetters } from 'vuex';

export default {
  name: "TodosList",
  components: {TodosItem},
  computed: {
    ...mapGetters('todos', { todos: 'list' })
  }
}
</script>

<style scoped>

</style>