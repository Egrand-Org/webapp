<template>
  <div class="home">
    <div class="header">
      <div class="row item">
        <div class="col-xs-3" :class="$route.path.indexOf('issue/ysh') !== -1 ? 'active' : ''" @click="$router.push('/issue/ysh')">
          已上会
        </div>
        <div class="col-xs-3" :class="$route.path.indexOf('issue/dsh') !== -1 ? 'active' : ''" @click="$router.push('/issue/dsh')">
          待上会
        </div>
        <div class="col-xs-3" :class="$route.path.indexOf('issue/spz') !== -1 ? 'active' : ''" @click="$router.push('/issue/spz')">
          审批中
        </div>
        <div class="col-xs-3" :class="$route.path.indexOf('issue/zxz') !== -1 ? 'active' : ''" @click="$router.push('/issue/zxz')">
          执行中
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
  import {getPage4My} from '../../service/issue'
  import {relativeTime} from '../../config/mUtils'
  import emitter from '../../mixins/emitter'
  export default {
    mixins : [emitter],
    mounted(){
      this.dispatch("egd-home", "change-header", "我的议题", false, true)
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    .header
      position: fixed;
      z-index: 1;
      top: 2rem;
      height: 2rem;
      line-height: 2rem;
      width: 100%;
      background-color: #fff;
      border-bottom: .1rem solid #f1f1f1;
      .item
        margin: 0px;
        width: 100%;
        .active
          border-bottom: .1rem solid #26a2ff;
    .list_container
      margin-top: 2rem;
      margin-bottom: 2rem;
</style>
