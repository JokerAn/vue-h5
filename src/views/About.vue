<template>
  <div class="about">
    <div class="box">
      <div class="box-item"></div>
      <div class="box-item box-item-2">
        wahaha
      </div>
      <div class="box-item"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Abut',
  data() {
    return {
      msg: 'www'
    }
  },
  created(){

  }
}
</script>>
<style lang="less" scoped>
.box {
  background: #ddd;
  height: 500px;
  display: flex;
  justify-content: space-between;
}
.box-item {
  flex-grow: 1;
  display: inline-block;
  height: 200px;
  background:#666;
}
.box-item-2 {
  flex-grow: 0;
  width: 175px;
  height: 200px;
  background: red;
}
</style>
