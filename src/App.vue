<template>
  <div id="app">
    <router-view></router-view>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="http://lean-stack.de">Micha Alt</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
</style>
