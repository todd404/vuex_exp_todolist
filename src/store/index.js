import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:[]
  },
  getters:{
    planList: state=>{
      return state.todoList.filter((value) => !value.delete)
    },
    allList: state=>{
      return state.todoList
    },
    allCount: state=>{
      return state.todoList.length;
    },
    doneCount: state=>{
      return state.todoList.filter(v=>v.delete).length;
    }
  },
  mutations: {
    addTodo(state, payload){
      let savedTodoList = state.todoList;
      savedTodoList.push(payload);
      savedTodoList = savedTodoList.map((value, index)=>{
        return {id: index, ...value}
      })

      state.todoList = savedTodoList;
    },
    
    changeTodo(state, payload){
      let index = state.todoList.findIndex((value)=>value.id == payload.id);
      if(index == -1)
        return;
      state.todoList.splice(index, 1, {...state.todoList[index], delete: payload.delete})
    },

    deleteAllTodo(state){
      state.todoList = []
    }
  },
  actions: {
  },
  modules: {
  }
})
