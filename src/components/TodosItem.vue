<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="toggle(todo.id)">
      <label @dblclick="editMode = true">{{ todo.title }}</label>
      <button class="destroy" @click="destroy(todo.id)"></button>
    </div>
    <input class="edit" v-model.trim="title"
        @keyup.enter="commitEdit"
        @keyup.esc="cancelEdit"
        @blur="commitEdit"
        v-focus="editMode"
    >
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "TodosItem",
  data: function () { return {
    editMode: false,
    title: this.todo.title
  }},
  props: ['todo'],
  methods: {
    ...mapActions('todos', ['toggle', 'update', 'destroy']),
    commitEdit() {
      if (this.title) {
        this.update({ id: this.todo.id, title: this.title });
      } else {
        this.destroy(this.todo.id);
      }
      this.editMode = false;
    },
    cancelEdit() {
      this.title = this.todo.title;
      this.editMode = false;
    },
  },
  directives: {
    'focus': {
      update: function (el, binding) {
        if (binding.value) {
          el.focus();
        }
      }
    }
  }
}
</script>

<style scoped>

</style>