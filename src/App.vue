<template>
  <div id="app">
    <router-link to="/">ログイン   </router-link>
    <router-link to="/home">ホーム   </router-link>
    <router-link to="/todo">することリスト  </router-link>
    <router-link to="/message">メッセージ</router-link>
    <router-view />
  </div>
</template>

<script>
//import Todo from './components/Todo.vue'

export default {
    name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
