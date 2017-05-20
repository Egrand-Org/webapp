<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <section @click = "gotoAddress('/order')" class="guide_item">
            <span class="glyphicon glyphicon-book icon_style"></span>
            <div class="text">制度建设</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/todo'})" class="guide_item">
            <span class="glyphicon glyphicon-list-alt icon_style"></span>
            <div class="text">待办事项</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/issue'})" class="guide_item">
            <span class="glyphicon glyphicon-list icon_style"></span>
            <div class="text">公告通知</div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/meeting'})" class="guide_item">
            <span class="glyphicon glyphicon-th-large icon_style"></span>
            <div class="text">我发起的议题</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress('/order')" class="guide_item">
            <span class="glyphicon glyphicon-th icon_style"></span>
            <div class="text">决策执行清单</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/issue'})" class="guide_item">
            <span class="glyphicon glyphicon-ok icon_style"></span>
            <div class="text">已决策议题</div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/meeting'})" class="guide_item">
            <span class="glyphicon glyphicon-lock icon_style"></span>
            <div class="text">我参加的会议</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress('/order')" class="guide_item">
            <span class="glyphicon glyphicon-edit icon_style"></span>
            <div class="text">待参加会议</div>
          </section>
        </div>
        <div class="col-xs-4">
          <section @click = "gotoAddress({path: '/issue'})" class="guide_item">
            <span class="glyphicon glyphicon-check icon_style"></span>
            <div class="text">待审阅会议</div>
          </section>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-xs-12">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1"><span class="glyphicon glyphicon-list-alt icon"></span>待办事项</mt-tab-item>
            <mt-tab-item id="2"><span class="glyphicon glyphicon-list-alt icon"></span>待参加会议</mt-tab-item>
            <mt-tab-item id="3"><span class="glyphicon glyphicon-list-alt icon"></span>待审阅会议</mt-tab-item>
          </mt-navbar>
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <mt-cell is-link v-for="issue in issues" :title="issue.name" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <mt-cell v-for="n in 4" :title="'选项 ' + n" />
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPageByStatus} from '../../service/issue'
  export default {
    data(){
      return {
        selected : '1',
	      issues : []
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["重大事项决策管理平台", false]));
      getPageByStatus('getDspYtPage').then(result => {
        if(result.result)
          this.issues = result.data;
      });
    },
    methods: {
      clickItem: function (id) {
        this.$router.push('/meeting/' + id)
      },
      gotoAddress(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    width 100%
    hr
      margin-top .2rem
      margin-bottom .5rem
      border-top: .1rem solid #eee;
    .icon
      margin-right .2rem
      font-size .5rem
    .guide_item
      height 3.5rem
      -webkit-box-flex 1
      -ms-flex 1
      flex 1
      display -webkit-box
      display -ms-flexbox
      display flex
      text-align center
      -webkit-box-orient vertical
      -webkit-box-direction normal
      -ms-flex-direction column
      flex-direction column
      -webkit-box-align center
      -ms-flex-align center
      align-items center
      .icon_style
        margin-bottom .2rem
        margin-top .3rem
        fill #ccc
        font-size 1.2rem
      span
        margin-top .2rem
        font-size .45rem
        color #26a2ff
      .text
        margin-top .2rem
        font-size .45rem
        color #666
</style>
