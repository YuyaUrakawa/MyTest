<template>
  <div id="app">
      <h1>することリスト</h1>
     <input type="text" v-model="input">
      <button v-on:click="addList">追加</button>
      <ul>
          <li v-for="(item, index) in todos" v-bind:key="item.input">{{item.input}}
              <button @click="doRemove(index)">削除</button>
          </li>
      </ul>
    <router-view />
  </div>
</template>

<script>
//import Todo from './components/Todo.vue';

export default {
  name: 'App',
    data: function() {
return {
  todos:[]
  };
},
  methods:{
    addList:function () {
      this.todos.push({
          input:this.input
      })
      },
      doRemove: function(index){
          if(confirm('削除しますか')) {
              this.todos.splice(index, 1);
          }
      }
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
