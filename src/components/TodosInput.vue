<template>
  <input class="new-todo" placeholder="What needs to be done?" autofocus
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

      this.$store.dispatch('createTodo', this.title);
      this.title = '';
    }
  }
}
</script>

<style scoped>

</style>