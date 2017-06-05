<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view class="egrand"></router-view>
    </transition>
    <EgdFooter></EgdFooter>
  </div>
</template>

<script>
  import EgdFooter from 'footer'
  export default {
    components: {
      EgdFooter
    }
  }
</script>

<style lang="scss">
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
  .egrand {
    position: relative;
    padding-top: 2rem;
    height: 100%;
    width: 100%;
  }
</style>
