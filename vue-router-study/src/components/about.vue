<template>
  <div>
    关于我
    <hr>
    <ul class="nav">
      <!--<router-link to="/about" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link>-->
      <router-link :to="{name:'About'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name:'Work'}"  tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name:'Hobby'}"  tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    测试数据: {{test}}
    <router-view></router-view>

  </div>
</template>

<script>
    export default {
        data(){
          return {
              test: '改变前'
          }
        },
        beforeCreate(){
          console.log('beforeCreate')
        },
        beforeRouteEnter(to, from, next){
            console.log("beforeRouteEnter")
          console.log(this)
          next((vm) => {
            vm.test = '改变了'
          })
        },
        beforeRouteUpdate(to, from, next){
            console.log("beforeRouteUpdate")
          next()
        },
      beforeRouteLeave(to, from, next){
        next()
      }
    }
</script>
<style>

</style>
