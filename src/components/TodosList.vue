<template>
  <ul class="todo-list">
    <TodosItem></TodosItem>
  </ul>
</template>

<script>
import TodosItem from '@/components/TodosItem';
export default {
name: "TodosList",
  components: {TodosItem}
}
</script>

<style scoped>

</style>