<template>
	<div class="notic_info">
		<div class="panel no-radius">
			<div class="panel-body body">
				<div class="title">
					{{notice.title}}
				</div>
				<div class="info">
					<div class="row">
						<div class="col-xs-6">
							紧急程度：{{notice.emergency}}
						</div>
						<div class="col-xs-6">
							创建人：{{notice.createPeople}}
						</div>
					</div>
				</div>
				<div class="info">
					<div class="row">
						<div class="col-xs-12">
							创建时间：{{notice.createDate}}
						</div>
					</div>
				</div>
				<div class="info">
					<div class="row">
						<div class="col-xs-12">
							有效日期：{{notice.deadline}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<ul style="border-radius:0px;box-shadow:none">
				<li class="list-group-item" style="border-right:0;border-left:0;border-bottom: 0; font-weight:700;">
					内容
				</li>
			</ul>
			<div class="panel-body" style="padding-top:0">
				{{notice.content}}
			</div>
		</div>
		
		<div>
			<ul style="border-radius:0px;box-shadow:none">
				<li class="list-group-item" style="border-right:0;border-left:0;border-bottom: 0;font-weight:700;">
					附件
				</li>
			</ul>
			<div class="panel-body" style="padding:0px;">
				<ul class="list-group">
					<template v-for="(result, index) in notice.file">
						<li class="list-item" v-if="(index+1) == 0" style="border-right:0px;border-left:0px;border-top: 0px;">
							没有附件
						</li>
						<li class="list-item" v-else="(index+1) > 0" style="border-right:0px;border-left:0px;">
							{{result.fileName}}
						</li>
					</template>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { openNotice } from '../../service/notice'
	export default {
		data() {
			return {
				id: this.$router.currentRoute.params.id,
				notice: {}
			}
		},
		mounted() {
			this.$root.$emit.apply(this.$root, ['change-header'].concat(["公告详情", true, true]));
			//获取详情——公告
			openNotice(this.id).then(value => {
				this.notice = value;
			});
		}
	}
</script>

<style lang="stylus" scoped>
  .notic_info
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
        margin-top: .5rem;
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
    .list-item {
	  position: relative;
	  display: block;
	  padding: 10px 15px;
	  margin: 0 15px;
	  margin-bottom: -1px;
	  background-color: #fff;
	  border: 1px solid #ddd;
	}
</style>
