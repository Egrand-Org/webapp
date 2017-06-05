<template>
  <div id="app">
    <EgdHeader :headTitle="title" :goBack="goBack" :showHeader="showHeader">
    </EgdHeader>
    <transition name="router-fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  import EgdHeader from 'header'
  import {mapMutations} from 'vuex'
  export default {
    name: 'egd-home',
    componentName: 'egd-home',
    data(){
      return {
        title : '重大事项决策管理平台',
        goBack : false,
        showHeader : false
      }
    },
    mounted(){
      this.INIT_EGRANDCONTEXT()
    },
    components: {
      EgdHeader
    },
    methods: {
      ...mapMutations([
        'INIT_EGRANDCONTEXT'
      ])
    },
    mounted(){
      this.$on("change-header", (...params) => {
        [this.title, this.goBack, this.showHeader] = params
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/css/common';
  #app {
    height: 100%;
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .1s;
    -webkit-transform: translate(-50px, 0);
    transform: translate(50px, 0);
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(-50px, 0);
  }
  .view {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
