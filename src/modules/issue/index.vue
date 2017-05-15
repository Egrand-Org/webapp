<template>
  <div class="meeting">
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          新建办公楼项目议题
          &nbsp;&nbsp;
          <span class="glyphicon glyphicon-chevron-down" style="float:right"></span>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-8">
              发起部门：研究所信息中心
            </div>
            <div class="col-xs-4">
              状态：已安排
            </div>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-12">
              发起时间：2017-05-14 11:00:00
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group" style="border-radius:0px;box-shadow:none">
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              关于办公楼项目...
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            议题内容
        </li>
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              是
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            一把手是否末位发言
        </li>
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              是
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            纪检组是否在场
        </li>
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              周志虎
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            执行人
        </li>
      </ul>
    </div>
    <div class="panel" style="margin-top:5px;border-radius:0px;">
      <div class="panel-body" style="padding:0px;">
        <ul class="list-group">
          <li class="list-group-item" style="border-right:0px;border-left:0px;border-top:0px;">
            <span class="badge">同意</span>
            张三
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span class="badge">不同意</span>
            李四
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span class="badge">同意</span>
            王五
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span class="badge">基本同意但有不同意见</span>
            李六
          </li>
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
  export default {
    data(){
      return {
        id : this.$router.currentRoute.params.id
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["议题详情", true]));
      this.$root.$emit.apply(this.$root, ['change-footer'].concat([false]));
    }
  }
</script>

<style lang="stylus" scoped>
  .meeting
    position absolute
    top 3.5rem
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
