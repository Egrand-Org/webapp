<template>
  <div>
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          {{issue.name}}
        </div>
        <small>
          <div class="row">
            <div class="col-xs-4">
              发起人：{{issue.authorName}}
            </div>
            <div class="col-xs-4">
              发起部门：{{issue.authorOuName}}
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              发起时间：{{issue.fileDate}}
            </div>
          </div>
        </small>
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
    <div class="panel" style="margin-top:5px;border-radius:0px;">
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
  </div>
</template>

<script>
  import {openYt} from '../../service/issue'
  export default {
    data(){
      return {
        id: this.$router.currentRoute.params.id,
        issue: {}
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["议题详情", true]));
      openYt(this.id).then(value => {
        this.issue = value;
      });
    }
  }
</script>

<style lang="stylus" scoped>
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
</style>
