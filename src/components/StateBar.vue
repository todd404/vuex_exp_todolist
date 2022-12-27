<template>
  <div class="state-bar">
    <span class="state-bar-msg">
        已设定{{allCount}}个计划，已完成{{doneCount}}个
    </span>
  </div>
</template>

<script>
export default {
    props:{
        allCount: Number,
        doneCount: Number
    }
}
</script>

<style scoped>
.state-bar{
    border-radius: 0% 0% 18px 18px;
    background-color: dimgray;
}

.state-bar-msg{
    position: relative;
    left: 3%;
    color: aliceblue;
}
</style>>