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
    let aa = 'aa'

    let bb = new Promise((resolve,reject)=>{
      resolve(1)
    })

    setTimeout(()=>{
      console.log(this.msg)
      console.log(aa)
      console.log({b: 1,...{c: 3}})
      console.log([1,2,...[3,4]])
      console.log([1,2,[3,4]])
      console.log(Object.assign({b: 5,d: 8},{b: 1,...{c: 3}}))
      console.log(['aa'].includes(aa))
      bb.then((result)=>{
        console.log(result)
      })
    },100)
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
}
.box-item-2 {
  flex-grow: 0;
  width: 175px;
  height: 200px;
  background: red;
}
</style>
