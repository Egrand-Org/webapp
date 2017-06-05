<template>
  <div class="login">
    <div class="login-panel">
      <div class="text-center logo">
        <img src="../../assets/img/logo48.png"/>
        <div class="logo-text">笃行 创新 致远</div>
      </div>
      <div>
        <form enctype="multipart/form-data">
          <section class="input_container">
            <span class="glyphicon glyphicon-user"/>
            <input type="text" placeholder="用户名" v-model="loginName">
          </section>
          <section class="input_container">
            <span class="glyphicon glyphicon-lock"/>
            <input type="password" placeholder="密码" v-model="loginPassword">
          </section>
          <section class="password_container">
            <mt-cell title="记住密码">
              <mt-switch v-model="isSavePwd"></mt-switch>
            </mt-cell>
          </section>
        </form>
        <div class="login_container" @click="login()">登陆</div>
        <div class="text-center login-failed" @click="loginFailed()">无法登陆</div>
      </div>
    </div>
    <mt-actionsheet v-model="popupVisible" :actions="actions">
    </mt-actionsheet>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import {login} from '../../service/login'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      let _this = this;
      return {
        loginName: '',
        loginPassword: '',
        isSavePwd: false,
        popupVisible: false,
        actions: [{
          name: '忘记密码',
          method: function(){
          }
        }]
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["重大事项决策管理平台", false, false]));
    },
    methods: {
      ...mapMutations([
        'SET_EGRANDCONTEXT',
      ]),
      login: function(){
        if('' == this.loginName || '' == this.loginPassword) {
          Toast('请输入用户名或密码！');
          return;
        }
        login(this.loginName, this.loginPassword, this.isSavePwd).then(value => {
          this.SET_EGRANDCONTEXT(value)
        })
      },
      loginFailed: function(){
        this.popupVisible = !this.popupVisible;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .login
    background-image url(../../assets/img/login/bg.jpeg)
    background-repeat no-repeat
    background-size cover
    background-size 100% 100%
    .login-panel
      margin: 0 auto;
      width: 90%;
      padding-top: 3rem;
      .logo
        margin-bottom 1rem
        .logo-text
          color #666
          font-size .5rem
      section
        margin-top .5rem
        background-color #fff
      .password_container
        color #666
        background-color transparent
        .mint-cell
          background-color transparent
        .mint-cell-wrapper
          padding 0px
      .input_container
        width 100%
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border: 1px solid #f1f1f1;
        border-radius: .15rem;
        span
          color: #666;
          margin: .5rem .1rem 0 .2rem;
        input
          font-size: .7rem;
          color: #666;
          height 2rem
          width 90%
      .login_container
        margin: .5rem auto;
        font-size: .7rem;
        color: #fff;
        background-color: #26a2ff;
        padding: .5rem 0;
        border: 1px;
        border-radius: .15rem;
        text-align: center;
      .login-failed
        color #26a2ff
</style>
