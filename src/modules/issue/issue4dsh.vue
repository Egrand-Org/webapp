<template>
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
      getPage4My().then(value => {
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
