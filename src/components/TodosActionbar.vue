<template>
  <footer class="footer" v-if="hasTodos">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-if="hasNoCompletedTodos" class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "TodosActionbar",
  computed: {
    ...mapGetters('todos', [
        'hasTodos', 'activeCount', 'hasNoCompletedTodos'
    ])
  }
}
</script>

<style scoped>

</style>