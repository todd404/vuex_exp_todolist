<template>
  <div class="input-box">
    <input v-model.lazy="todo_data" type="text" class="todo-input" placeholder="请输入计划内容">
    <button @click='clickEvent'>+</button>
    <button @click='$emit("delete-click")'>x</button>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            todo_data: '',
        }
    },
    methods:{
        clickEvent(){
            if(this.todo_data == ""){
                return;
            }
            this.$emit("add-click", this.todo_data);
            this.todo_data = "";
        }
    } 
}
</script>

<style>
.input-box{
    display: flex;
    width: 100%;
    gap: 1%;
}

.todo-input{
    flex-grow: 1;
}
</style>