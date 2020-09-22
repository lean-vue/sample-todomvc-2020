<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="$emit('toggle-todo', todo.id)"></TodosItem>
  </ul>
</template>

<script>
import TodosItem from '@/components/TodosItem';
export default {
  name: "TodosList",
  props: ['todos'],
  components: {TodosItem}
}
</script>

<style scoped>

</style>