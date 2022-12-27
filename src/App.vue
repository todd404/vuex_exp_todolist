<template>
  <div id="app">
    <ToDoInput @add-click="addTodoEvent" @delete-click="deleteAllTodo"></ToDoInput>
    <ToDoList :todo_list="todoList" @checked-change="changeTodo"></ToDoList>
    <button @click="changeDisplayEvent" class="toggle-btn">{{onlyPlan?"显示全部":"显示计划"}}</button>
    <StateBar class="state-bar" :allCount="allCount" :doneCount="doneCount"></StateBar>
  </div>
</template>

<script>
import ToDoInput from './components/ToDoInput.vue';
import ToDoList from './components/ToDoList.vue';
import StateBar from './components/StateBar.vue';
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    ToDoInput,
    ToDoList,
    StateBar
  },
  data: function(){
    return{
      onlyPlan: false,
    }
  },
  methods:{
    ...mapMutations(['addTodo', 'changeTodo', 'deleteAllTodo']),

    addTodoEvent(todo_data){
      this.addTodo({data: todo_data, delete: false})
    },

    changeDisplayEvent(){
      this.onlyPlan = !this.onlyPlan
    }
  },
  computed:{
    ...mapGetters(['allList', 'planList', 'allCount', 'doneCount']),
    todoList(){
      return this.onlyPlan ? this.planList : this.allList; 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 40%;
  height: 30%;
  top: 35%;
  left: 30%;
  border-radius: 20px;
  border: 2px gray solid;
  padding: 2%;
}

.toggle-btn{
  width: 20%;
}

.state-bar{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
