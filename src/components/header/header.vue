<template>
  <div class="header">
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <span class="glyphicon glyphicon-chevron-left goBack" v-if="userInfo"></span>
    </section>
    <router-link :to="userInfo? '/about':'/login'" class="head_login">
      <span class="glyphicon glyphicon-user user_avatar" v-if="userInfo"></span>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="title_head" v-if="headTitle">
      <span class="title_text ellipsis">{{headTitle}}</span>
    </section>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    props: ['headTitle', 'goBack'],
    mounted(){
      //获取用户信息
      this.getUserInfo();
    },
    computed: {
      ...mapState([
        'userInfo'
      ]),
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ])
    }
  }
</script>

<style lang="stylus" scoped>
  .header
    background-color #3190e8
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 1.95rem
    .head_goback
      width: .6rem;
      height: .8rem;
      line-height: 2.3rem;
      margin-left: .4rem
      .goBack
        color #fff
        font-size 0.8rem
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
      .login_span
        color #fff
    .title_head
      position absolute
      top 50%
      left 50%
      -webkit-transform translate(-50%,-50%)
      transform translate(-50%,-50%)
      width 50%
      color #fff
      text-align center
      margin-left -.5rem
      .title_text
        font-size .8rem
        color #fff
        text-align center
        display block
      .ellipsis
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    a
      color rgba(255, 255, 255, .8)
      transition color .15s ease
      display inline-block
      vertical-align middle
      font-weight 300
      letter-spacing .075em
      margin-right 1.8em
      &:hover
        color #fff
      &.router-link-active
        color #fff
      &:nth-child(6)
        margin-right 0
</style>
