<template>
  <input class="new-todo" placeholder="What needs to be done?" v-autofocus
    v-model.trim="title" @keyup.enter="createTodo"
  >
</template>

<script>

export default {
  name: "TodosInput",
  data: () => ({
    title: ''
  }),
  methods: {
    createTodo() {
      if (!this.title) return;

      this.$store.dispatch('todos/create', this.title);
      this.title = '';
    }
  },
  directives: {
    'autofocus': {
      inserted: el => el.focus()
    }
  }
}
</script>

<style scoped>

</style>