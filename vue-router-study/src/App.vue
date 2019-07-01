<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path:'/document'}" event="mouseover" active-class="activeClass">document</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li>
          <router-link to="/user" event="mouseover">user</router-link>
        </li>
      </ul>
    </div>

    <input type="button" value="后退" @click="backHandle" />
    <input type="button" value="前进" @click="forwardHandle" />
    <input type="button" value="控制前进后退的步数" @click="goHandle" />
    <input type="button" value="控制指定的导航push" @click="pushHandle" />
    <input type="button" value="控制指定的导航replace" @click="replaceHandle" />


    <transition :name="names">
      <router-view class="center"></router-view>
    </transition>



  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route(to, from){
      console.log(to.meta.index)  // 目标导航下标
      console.log(from.meta.index)  // 离开导航下标

      if(to.meta.index < from.meta.index) {
        this.names = 'right'
      }else{
        this.names = 'left'
      }
    }
  },
  data(){
      return {
          index: '/home',
          names: 'left'
      }
  },
  methods: {
    backHandle(){
        this.$router.back()
    },
    forwardHandle(){
        this.$router.forward()
    },
    goHandle(){
        // this.$router.go(-3)
      // this.$router.go(-3)
      this.$router.go(0)
    },
    pushHandle(){
        // this.$router.push('/document')
      this.$router.push({path:'/document'})
    },
    replaceHandle(){
      this.$router.replace({path:'/document'})
    }
  }
}
</script>

<style>
  .v-enter {
    opacity: 0;
  }
  .v-enter-to {
    opacity: 1;
  }
  .v-enter-active {
    transition: 1s;
  }

  .v-leave {
    opacity: 1;
  }
  .v-leave-to {
    opacity: 0;
  }
  .v-leave-active {
    transition: 2s;
  }

  .left-enter {
    transform: translateX(100%);
  }

  .left-enter-active,.left-leave-active {
    transition: 1s;
  }

  .left-leave-to {
    transform: translateX(-100%);
  }

  .right-enter {
    transform: translateX(-100%);
  }

  .right-enter-active,.right-leave-active {
    transition: 1s;
  }

  .right-leave-to {
    transform: translateX(100%);
  }

</style>
