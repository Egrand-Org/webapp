<template>
  <div class="institution_info">
    <div class="panel no-radius">
      <div class="panel-body body">
        <div class="title">
          {{institution.name}}
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-7">所属类别：{{institution.type}}</div>
            <div class="col-xs-5">关键词：{{institution.keyword}}</div>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-6">制度层级：{{institution.level}}</div>
            <div class="col-xs-6">发文单位：{{institution.unit}}</div>
          </div>
        </div>
        <div class="info">
          <div class="row">
            <div class="col-xs-12">
              发文时间：{{institution.date}}
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group" style="border-radius:0px;box-shadow:none">
        <li class="list-group-item" style="border-right:0px;border-left:0px;">
	        <span style="float:right;margin-left:10px;">
	        	<span class="glyphicon glyphicon-chevron-down" style="float:right"></span>
	        </span>
          		附件
        </li>
      </ul>
    </div>
    <div >
      <div class="panel-body" style="padding:0px;">
        <ul class="list-group">
          <template v-for="(result, index) in institution.file">
            <li class="list-group-item list-item" v-if="(index+1) == 0" style="border-right:0px;border-left:0px;border-top: 0px;">
              	没有附件
            </li>
            <li class="list-group-item list-item" v-else="(index+1) > 0" style="border-right:0px;border-left:0px;">
              {{result.fileName}}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {openInstitution} from '../../service/institution'
  export default {
    data(){
      return {
        id: this.$router.currentRoute.params.id,
        institution: {}
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["制度详情",true, true]));
      //获取详情——制度
      openInstitution(this.id).then(value => {
        this.institution = value;
      });
    }
  }
</script>

<style lang="stylus" scoped>
  .institution_info
    position absolute
    top 0rem
    bottom 2rem
    width 100%
    .no-radius
      border-radius 0px
      margin-bottom 0px
    .body
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      .title
        font-weight 700
      .info
        margin-top: 1rem
        display: -webkit-box
        display: -ms-flexbox
        display: flex
        -webkit-box-pack: justify
        -ms-flex-pack: justify
        justify-content: space-between
        font-size: .5rem
        color: #666
    .confrim_order
      display: -webkit-box
      display: -ms-flexbox
      display: flex
      position: fixed
      bottom: 0
      width: 100%
      height: 4rem
      .info
        background-color: #3c3c3c
        -webkit-box-flex: 5
        -ms-flex: 5
        flex: 5
        padding-left: .7rem
        line-height: 4rem
        font-size: 1.4rem
        color: #fff
      .confrim
        -webkit-box-flex: 2
        -ms-flex: 2
        flex: 2
        background-color: #56d176
        text-align: center
        line-height: 4rem
        font-size: 1.4rem
        color: #fff
	  .list-item 
		  position: relative
		  display: block
		  padding: 10px 15px
		  margin: 0 15px
		  margin-bottom: -1px
		  background-color: #fff
		  border: 1px solid #ddd
</style>
