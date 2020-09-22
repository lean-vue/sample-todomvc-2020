<template>
  <!-- List items should get the class `editing` when editing -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="$emit('toggle')">
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
</template>

<script>
export default {
  name: "TodosItem",
  props: ['todo']
}
</script>

<style scoped>

</style>