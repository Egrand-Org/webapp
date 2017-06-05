<template>
  <div class="header" v-if="showHeader">
    <mt-header fixed :title="headTitle">
      <section class="head_goback" v-if="goBack" @click="$router.go(-1)" slot="left">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>
      </section>
      <div class="head_login" slot="right">
        <slot name="right"></slot>
      </div>
    </mt-header>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: ['headTitle', 'goBack', 'showHeader'],
    computed: {
      ...mapState([
        'egrandContext'
      ]),
    }
  }
</script>

<style lang="stylus" scoped>
  .hidden
    display none
  .header
    background-color #3190e8
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 2rem
    color #fff
    .head_goback
      height: 1rem;
      line-height: 1rem;
    .head_login
      right .2rem
      font-size .65rem
      color #fff
      position absolute
      top 50%
      -webkit-transform translateY(-50%)
      transform translateY(-50%)
      .user_avatar
        color #fff
        font-size:0.8rem
</style>
