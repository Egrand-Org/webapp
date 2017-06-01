<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="user-panel">
            <div class="pull-left image">
              <img src="./assets/img/about.jpg" class="img-circle">
            </div>
            <div class="pull-left info">
              <p>{{userinfo.name}}</p>
              <p>{{userinfo.ouName}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="我发起的议题" to="/issue" is-link>
            <span slot="icon" class="glyphicon glyphicon-tasks" style="color:#000; vertical-align: middle;"></span>
            {{report.yts_my ? report.yts_my : 0}}
          </mt-cell>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="我待参加的会议" to="/meeting/todo/attend" is-link>
            <span slot="icon" class="glyphicon glyphicon-list-alt" style="color:#000; vertical-align: middle;"></span>
            {{report.hys_attend ? report.hys_attend : 0}}
          </mt-cell>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="我已参加的会议" to="/meeting/todo/my" is-link>
            <span slot="icon" class="glyphicon glyphicon-list-alt" style="color:#000; vertical-align: middle;"></span>
            {{report.hys_my ? report.hys_my : 0}}
          </mt-cell>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="待执行的议题" to="/issue/exe/todo/zxz" is-link>
            <span slot="icon" class="glyphicon glyphicon-tasks" style="color:#000; vertical-align: middle;"></span>
            {{report.yts_todo ? report.yts_todo : 0}}
          </mt-cell>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="待安排的议题" to="/issue/attend" is-link>
            <span slot="icon" class="glyphicon glyphicon-calendar" style="color:#000; vertical-align: middle;"></span>
            {{report.yts_arrange ? report.yts_arrange : 0}}
          </mt-cell>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <mt-cell title="意见反馈" to="/comment" is-link>
            <span slot="icon" class="glyphicon glyphicon-comment" style="color:#000; vertical-align: middle;"></span>
          </mt-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getReport4User} from '../../service/issue'
  export default {
    data() {
      return {
        report: {},
        userinfo: {}
      }
    },
    computed: {
      ...mapState([
        'egrandContext'
      ]),
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["我", true]));
      getReport4User().then(result => {
        this.report = result;
      });
      if(this.$store.state.egrandContext){
        this.userinfo = {
          name: this.$store.state.egrandContext.name,
          ouName: this.$store.state.egrandContext.ouName
        };
      } else {
          this.userinfo = {
            name: '周志虎',
            ouName: '研发部门'
          }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .about {
    background-color: #e6e6e6;
    padding-top: 2rem;
  }
  .container {
    margin-bottom: .75rem;
    background-color: #ffffff;
  }
  .row {
    border-bottom: 1px solid #e6e6e6;
  }
  .col-xs-12 {
    padding: 0rem;
  }

  /**
   * 用户信息样式
   */
  .user-panel {
    position: relative;
    width: 100%;
    padding: .5rem;
    overflow: hidden;
  }
  .user-panel > .image > img {
    width: 100%;
    max-width: 2.25rem;
    height: auto;
  }
  .user-panel > .info {
    padding: .25rem .25rem .25rem .75rem;
    line-height: 1;
    position: absolute;
    left: 2.75rem;
  }
  .user-panel > .info > p {
    font-weight: 600;
    margin-bottom: .45rem;
    font-size: .7rem;
  }
  .user-panel > .info > a {
    text-decoration: none;
    padding-right: .25rem;
    margin-top: .15rem;
    font-size: .55rem;
  }
  .pull-left {
    float: left !important;
  }
  .img-circle {
    border-radius: 50%;
  }
</style>
