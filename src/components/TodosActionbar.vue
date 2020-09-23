<template>
  <footer class="footer" v-if="hasTodos">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <router-link exact-active-class="selected" to="/">All</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/active">Active</router-link>
      </li>
      <li>
        <router-link active-class="selected" to="/completed">Completed</router-link>
      </li>
    </ul>
    <button v-if="hasNoCompletedTodos" @click="destroyCompletedTodos"
            class="clear-completed">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "TodosActionbar",
  computed: {
    ...mapGetters('todos', [
        'hasTodos', 'activeCount', 'hasNoCompletedTodos'
    ])
  },
  methods: mapActions('todos', ['destroyCompletedTodos'])
}
</script>

<style scoped>

</style>