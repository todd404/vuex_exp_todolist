<template>
  <ul>
    <li v-for="t in todo_list" :key="t.id">
        <input type="checkbox" 
        @change='$emit("checked-change", {id: t.id, delete: $event.target.checked})'
        :checked="t.delete"
        >
        <span :class="{delete: t.delete}">{{t.data}}</span>
    </li>
  </ul>
</template>

<script>
export default {
    props:{
        todo_list: Array
    }
}
</script>

<style>
ul{
    padding-inline-start: 0;
}

li{
    list-style-type: none;
}

.delete{
    text-decoration: line-through;
}
</style>