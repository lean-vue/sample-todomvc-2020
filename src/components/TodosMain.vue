<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <TodosList :todos="todos"></TodosList>
  </section>
</template>

<script>
import TodosList from '@/components/TodosList';
export default {
  name: "TodosMain",
  props: ['todos'],
  components: {TodosList}
}
</script>

<style scoped>

</style>