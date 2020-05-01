<template>
  <div id="app">
    <h1>することリスト</h1>
    <input type="text" v-model="input">
    <button v-on:click="addList">追加</button>
    <li v-for="item in list" v-bind:key="item.todo">{{item.todo}}
    </li>
    <router-view />
  </div>
</template>

<script>
//import Todo from './components/Todo.vue'

export default {
  name: 'App',
    data: function() {
return {
  };
},
  methods:{
    addList:function () {
      this.list.push({})
      },
    }
};
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
