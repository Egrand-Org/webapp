<template>
  <div id="app">
    <EgdHeader :headTitle="title" :goBack="goBack"></EgdHeader>
    <transition name="router-fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  import EgdHeader from 'header'
  import EgdFooter from 'footer'
  export default {
    data(){
      return {
        title : '重大事项决策管理平台',
        goBack : false,
        showFooter : true
      }
    },
    components: {
      EgdHeader,
      EgdFooter
    },
    mounted(){
      this.$on("change-header", (...params) => {
        [this.title, this.goBack] = params
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/css/common';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
  .view {
    position: relative;
    padding-top: 2.5rem;
    background-color: #fff;
    height: 100%;
    width: 100%;
  }
</style>
