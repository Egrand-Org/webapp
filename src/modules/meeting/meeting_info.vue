<template>
  <div class="meeting">
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          {{hy.subject}}
          <span class="glyphicon glyphicon-chevron-down" style="float:right"></span>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-8">
              类型：<template v-if="!hy.hylx"></template><template v-else>{{hy.hylx.name}}</template>
            </div>
            <div class="col-xs-4">
              主持人：<template v-if="!hy.presenter"></template><template v-else>{{hy.presenter.name}}</template>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-12">
              时间：{{hy.meetingTime}}
            </div>
          </div>
        </div>
        <div class="info">
            <div class="row">
              <div class="col-xs-8">
                地点：<template v-if="!hy.hydd"></template><template v-else>{{hy.hydd.name}}</template>
              </div>
              <div class="col-xs-4">
                状态：<template v-if="hy.status == 0">未开始</template><template v-else-if="hy.status == 1">会议中</template><template v-else>已结束</template>
              </div>
            </div>
        </div>
      </div>
      <div class="panel-footer footer">
        <div class="container no-padding">
          <div class="row">
            <div class="col-xs-4 border-right text-center">
              <div class="num">{{hy.ycxry}}</div>
              <div>应出席人</div>
            </div>
            <div class="col-xs-4 border-right text-center">
              <div class="num">{{hy.scxry}}</div>
              <div>实际参与人</div>
            </div>
            <div class="col-xs-4 text-center">
              <div class="num">{{hy.lxry}}</div>
              <div>列席人</div>
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group" style="border-radius:0px;box-shadow:none">
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              {{hy.hyjy}}
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            会议纪要
        </li>
      </ul>
    </div>
    <div class="panel" style="margin-top:5px;border-radius:0px;">
      <div class="panel-body" style="padding:0px;">
        <ul class="list-group">
          <li class="list-group-item" @click="clickItem('1')" style="border-right:0px;border-left:0px;border-top:0px;">
            <span style="float:right;margin-left:10px;">
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            <span class="badge">通过</span>
            新建办公楼项目议题
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            <span class="badge">进行中</span>
            关于领导视察行程安排
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            关于最新激励考核议题研究
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;">
            <span style="float:right;margin-left:10px;">
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            关于落实党风廉政建设的若干要求
          </li>
          <li class="list-group-item" style="border-right:0px;border-left:0px;border-radius:0px;">
            <span style="float:right;margin-left:10px;">
              <span class="glyphicon glyphicon-chevron-right" style="color:#ddd"></span>
            </span>
            2016员工评比讨论
          </li>
        </ul>
      </div>
    </div>
    <section class="confrim_order">
      <p class="info">用时：00:00:15</p>
      <p class="confrim">开始会议</p>
    </section>
  </div>
</template>

<script>
  import {openMeeting} from '../../service/meeting'
  export default {
    data(){
      return {
        id: this.$router.currentRoute.params.id,
        hy: {}
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["会议详情", true]));
      openMeeting(this.id).then(value => {
        this.hy = value;
      });
    },
    methods: {
      clickItem: function (id) {
        this.$router.push('/issue/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .meeting
    padding-top: 2rem;
    width 100%
    height 100%
    .no-radius
      border-radius 0px
      margin-bottom 0px
    .body
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .title
        font: 0.65rem/0.65rem PingFangSC-Regular;
        font-weight 700
      .info
        margin-top: 0.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: .5rem;
        color: #666;
    .footer
      background-color: #fff;
      .no-padding
        padding 0px
      .border-right
        border-right 1px solid #ccc
      .num
        font-size: 1rem;
    .confrim_order
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 2rem;
      .info
        background-color: #3c3c3c;
        -webkit-box-flex: 5;
        -ms-flex: 5;
        flex: 5;
        padding-left: .7rem;
        line-height: 2rem;
        font-size: .8rem;
        color: #fff;
      .confrim
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        background-color: #56d176;
        text-align: center;
        line-height: 2rem;
        font-size: .8rem;
        color: #fff;
</style>
