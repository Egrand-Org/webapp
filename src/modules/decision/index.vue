<template>
  <div class="decision">
    <div class="header">
      <div class="row item">
        <div class="col-xs-6 center" :class="$route.path.indexOf('decision/exe') !== -1 ? 'active' : ''" @click="$router.push('/decision/exe')">
          待执行
        </div>
        <div class="col-xs-6 center">
        <!--<div class="col-xs-6 center" :class="$route.path.indexOf('meeting/todo/dcjhy') !== -1 ? 'active' : ''" @click="$router.push('/meeting/todo/dcjhy')">-->
          已执行
        </div>
      </div>
    </div>
    <section class="list_container">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
  import emitter from '../../mixins/emitter'
  export default {
    mixins : [emitter],
    mounted(){
      this.dispatch("egd-home", "change-header", "决策执行", false, true);
    }
  }
</script>

<style lang="stylus" scoped>
  .decision
    width 100%
    height 100%
    .header
      position: fixed
      z-index: 1
      top: 2rem
      height: 2rem
      line-height: 2rem
      width: 100%
      background-color: #fff
      border-bottom: .1rem solid #f1f1f1
      .item
        margin: 0
        width: 100%
        .center
          text-align: center
        .active
          border-bottom: .1rem solid #26a2ff
          color: #26a2ff
    .list_container
      margin-top: 1rem
      margin-bottom: 2rem
</style>
