<template>
  <div class="meeting">
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          {{issue.name}}
          <span class="glyphicon glyphicon-chevron-down" style="float:right"></span>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-8">
              执行人：{{issue.ytLeaderName}}
            </div>
            <div class="col-xs-4">
              状态：执行中
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--list-->
    <div class="panel" style="margin-top:5px;border-radius:0px;">
      <div class="panel-body" style="padding:0px;">
        <ul class="list-group">
          <template v-for="(ytLog, index) in issue.ytLogs">
            <li class="list-group-item" v-if="index == 0" style="border-right:0px;border-left:0px;border-top: 0px;">
              <span class="badge">{{ytLog.fileDate}}</span>
              <span class="bl">{{ytLog.content}}</span>
              <span class="bl" v-for="attachment in ytLog.attachment">{{attachment.filename}}</span>
            </li>
            <li class="list-group-item" v-else="index > 0" style="border-right:0px;border-left:0px;">
              <span class="badge">{{ytLog.fileDate}}</span>
              <span class="bl">{{ytLog.content}}</span>
              <span class="bl" v-for="attachment in ytLog.attachment">{{attachment.filename}}</span>
              
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {openYtLog} from '../../service/decision'
  export default {
    data(){
      return {
        id: this.$router.currentRoute.params.id,
        issue: {}
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["决策清单详情", true]));
      //获取详情——决策执行清单
      openYtLog(this.id).then(value => {
//    	console.log(value)
        this.issue = value;
      });
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
    .bl{
    	display: block;
    }    
        
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
        font-size: 1.8rem;
        color: #fff;
      .confrim
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        background-color: #56d176;
        text-align: center;
        line-height: 4rem;
        font-size: 1.8rem;
        color: #fff;
</style>
