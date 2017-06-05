<template>
  <div class="home">
    <div class="header">
      <div class="row item">
        <div class="col-xs-3 active">
          已上会
        </div>
        <div class="col-xs-3">
          待上会
        </div>
        <div class="col-xs-3">
          审批中
        </div>
        <div class="col-xs-3">
          执行中
        </div>
      </div>
    </div>
    <section class="list_container">
        <ul>
          <li @click="clickItem(issue.id)" v-for="issue in issues">
            <div class="row item">
              <div class="col-xs-12 no-padding">
                <hgroup>
                  <div class="info">
                    <span class="name">{{issue.authorName}}</span>
                    <span class="time">{{relativeTime(issue.fileDate)}}</span>
                  </div>
                  <div>
                    <p class="title">{{issue.name}}</p>
                  </div>
                  <div class="bottom">
                    {{issue.ytlx}}&nbsp;&nbsp;已上会
                  </div>
                </hgroup>
              </div>
            </div>
          </li>
        </ul>
    </section>
  </div>
</template>

<script>
  import {getPage4My} from '../../service/issue'
  import {relativeTime} from '../../config/mUtils'
  export default {
    data() {
      this.relativeTime = relativeTime;
      return {
        issues: []
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["我发起的议题", false]));
      getPage4My().then(value => {
        console.log(value)
        this.issues = value;
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
  .home
    .header
      height: 2rem;
      line-height: 2rem;
      width: 100%;
      border-bottom: .025rem solid #f1f1f1;
      .item
        margin: 0px;
        width: 100%;
        .active
          border-bottom: .025rem solid #26a2ff;
    .list_container
      li
        border-bottom: .025rem solid #f1f1f1;
        padding: 0.5rem;
        .item
          margin: 0px;
          width: 100%;
          .no-padding
            padding: 0px;
        .info
          .name
            font-size: .5rem;
          .time
            color: #666;
            font-size: .5rem;
        .title
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: .5rem 0 .5rem 0;
        .bottom
          font-size: .5rem;
          color: #666;
</style>
