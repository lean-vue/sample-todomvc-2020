<template>
  <section class="main" v-if="hasTodos">
    <input id="toggle-all" class="toggle-all" type="checkbox"
           :checked="isAllDone"
    >
    <label for="toggle-all">Mark all as complete</label>
    <TodosList></TodosList>
  </section>
</template>

<script>
import TodosList from '@/components/TodosList';
import { mapGetters } from 'vuex';
export default {
  name: "TodosMain",
  components: {TodosList},
  computed: mapGetters('todos', ['hasTodos', 'isAllDone']),
}
</script>

<style scoped>

</style>