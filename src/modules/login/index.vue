<template>
  <div class="login">
    <form class="loginForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="用户名" v-model="loginName">
      </section>
      <section class="input_container">
        <input type="password" placeholder="密码" v-model="loginPassword">
      </section>
    </form>
    <div class="login_container" @click="login()">登陆</div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import {login} from '../../service/login'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        loginName: '',
        loginPassword: ''
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["重大事项决策管理平台", false]));
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
        login(this.loginName, this.loginPassword).then(value => {
          let {result, data} = value;
          if(!result){
            Toast(data);
            return;
          }
          console.log(data);
          console.log(data.name);
          this.SET_EGRANDCONTEXT(data)
          this.$router.push('/Home')
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .login
    padding-top: 2rem;
    width 100%
    height 100%
    font-size .5rem
    .loginForm
      background-color: #fff;
      margin-top: .6rem;
      .input_container
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        padding: .6rem .8rem;
        border-bottom: 1px solid #f1f1f1;
        input
          font-size: .7rem;
          color: #666;
          width: 100%;
      .phone_number
        padding: .3rem .8rem;
    .login_container
      margin: 0 .5rem 1rem;
      font-size: .7rem;
      color: #fff;
      background-color: #26a2ff;
      padding: .5rem 0;
      border: 1px;
      border-radius: .15rem;
      text-align: center;
</style>
