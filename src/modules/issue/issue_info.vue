<template>
  <div class="meeting">
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          {{issue.name}}
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-6">
              发起人：{{issue.authorName}}
            </div>
            <div class="col-xs-4">
              发起部门：{{issue.authorOuName}}
            </div>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-12">
              发起时间：{{issue.fileDate}}
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group" style="border-radius:0px;box-shadow:none">
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              {{issue.summary}}
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            议题内容
        </li>
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              {{issue.leaderLastStatus}}
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            一把手是否末位发言
        </li>
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              {{issue.ytLeaderName}}
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            执行人
        </li>
      </ul>
    </div>
    <div class="panel" style="margin-top:5px;border-radius:0px;" v-if="issue.cxryResult && issue.cxryResult.length>0">
      <div class="panel-body" style="padding:0px;">
        <ul class="list-group">
          <template v-for="(result, index) in issue.cxryResult">
            <li class="list-group-item" v-if="index == 0" style="border-right:0px;border-left:0px;border-top: 0px;">
              <span class="badge">{{result.option}}</span>
              {{result.attender}}
            </li>
            <li class="list-group-item" v-else="index > 0" style="border-right:0px;border-left:0px;">
              <span class="badge">{{result.option}}</span>
              {{result.attender}}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <section class="confrim_order">
      <p class="info">议题结论：通过</p>
      <p class="confrim">投票</p>
    </section>
  </div>
</template>

<script>
  import {openYt} from '../../service/issue'
  import emitter from '../../mixins/emitter'
  export default {
    data(){
      return {
        id: this.$router.currentRoute.params.id,
        issue: {}
      }
    },
    mixins : [emitter],
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["议题详情", true, true]));
      // this.dispatch("egd-home", "change-header", "议题详情", true, true)
      //获取详情——议题
      openYt(this.id).then(result => {
        this.issue = result;
      });
    },

    methods: {
      vote: function() {
        this.$router.push('/vote/' + this.id)
      }
    }

  }
</script>

<style lang="stylus" scoped>
  .meeting
    position absolute
    top 0rem
    bottom 2rem
    width 100%
    .no-radius
      border-radius 0px
      margin-bottom 0px
    .body
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .title
        font-weight 700
      .info
        margin-top: 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: .5rem;
        color: #666;
    .confrim_order
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 4rem;
      .info
        background-color: #3c3c3c;
        -webkit-box-flex: 5;
        -ms-flex: 5;
        flex: 5;
        padding-left: .7rem;
        line-height: 4rem;
        font-size: 1.4rem;
        color: #fff;
      .confrim
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        background-color: #56d176;
        text-align: center;
        line-height: 4rem;
        font-size: 1.4rem;
        color: #fff;
</style>
