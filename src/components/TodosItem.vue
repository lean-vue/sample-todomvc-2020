<template>
  <!-- List items should get the class `editing` when editing -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="toggle(todo.id)">
      <label>{{ todo.title }}</label>
      <button class="destroy" @click="destroy(todo.id)"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "TodosItem",
  props: ['todo'],
  methods: {
    ...mapActions('todos', ['toggle', 'destroy'])
  }
}
</script>

<style scoped>

</style>