<template>
	<div class="page-loadmore-wrapper hylist_container" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <ul class="page-loadmore-list">
        <li v-for="hy in hyList" class="page-loadmore-listitem hy_li" @click="clickItem(hy.id)">
          <hgroup class="shop_right">
            <header class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{hy.name}}</h4>
            </header>
            <h5 class="fee_distance">
              <section class="fee">
                <span>
                  <span class="glyphicon glyphicon-list" style="color: #008000;"></span>
                  <template v-if="hy.status == 0">未开始</template><template v-else-if="hy.status == 1">会议中</template><template v-else-if="hy.status == 2">已结束</template>
                </span>
                <span>
                  <span class="glyphicon glyphicon-map-marker" style="color: #ff0000;"></span>
                  {{hy.hyddName}}
                </span>
              </section>
            </h5>
            <h5 class="fee_distance">
              <section class="fee">
                <span>
                  <span class="glyphicon glyphicon-time" style="color: #008000;"></span>
                  {{hy.meetingTime}}
                </span>
              </section>
            </h5>
          </hgroup>
        </li>
      </ul>
    </mt-loadmore>
	</div>
</template>
<script>
	import { getPage4Meeting } from '../../service/meeting'
	export default {
	    data(){
	      return {
	        status: this.$router.currentRoute.params.status,
	        hyList: [],
	        allLoaded: false,
	        wrapperHeight: 0,
	        pageNo: 1
	      };
	    },

	    created(){
	      getPage4Meeting(this.status, this.pageNo).then(value => {
	        this.hyList = value;
	      });
	    },

	    mounted(){
	      if(this.status == "my"){
	        this.$root.$emit.apply(this.$root, ['change-header'].concat(["我的会议",false, true]));
	      } else if(this.status == "getDcjHyPage"){
	        this.$root.$emit.apply(this.$root, ['change-header'].concat(["待参加会议",false, true]));
	      } else if(this.status == "getDsyHyPage"){
	        this.$root.$emit.apply(this.$root, ['change-header'].concat(["待审阅会议",false, true]));
	      }
	      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
	    },

	    methods: {
	      clickItem(id) {
	        this.$router.push('/meeting/' + id)
	      },
	      loadBottom() {
	        setTimeout(() => {
	          this.pageNo += 1;
	          getPage4Meeting(this.status, this.pageNo).then(value => {
	            if(null != value && value.length > 0){
	              this.hyList = this.hyList.concat(value);  // 数据追加
	            } else {
	              this.allLoaded = true;
	            }
	            this.$refs.loadmore.onBottomLoaded();
	          });
	        }, 1500);
	      }
	    }
	}
</script>
<style lang="stylus" scoped>
	.hylist_container
		background-color: #fff;
		padding-bottom: 2rem;
		.hy_li
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			border-bottom: .025rem solid #f1f1f1;
			padding: 0.5rem;
      .hy_img
				width: 100%;
				height: 100%;
				display: block;
				margin-right: .4rem;
				border-right: .025rem solid #f1f1f1;
				padding-top: 1.5rem;
				.hy_file
					color: #ccc;
					font-size: 1rem;
				.active
					color: #3190e8;
			.shop_right
				-webkit-box-flex: 1;
				-ms-flex: auto;
				flex: auto;
				margin-left: 0.4rem;
				.shop_detail_header
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-pack: justify;
					-ms-flex-pack: justify;
					justify-content: space-between;
					-webkit-box-align: center;
					-ms-flex-align: center;
					align-items: center;
					.shop_title
						width: 14rem;
						color: #333;
						padding-top: .01rem;
						font: .65rem/.65rem PingFangSC-Regular;
						font-weight: 700;
					.ellipsis
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
				.fee_distance
					margin-top: .5rem;
					display: -webkit-box;
					display: -ms-flexbox;
					display: flex;
					-webkit-box-pack: justify;
					-ms-flex-pack: justify;
					justify-content: space-between;
					font-size: .5rem;
					color: #666;
					.fee
						font-size: .5rem;
						color: #666;
						span
							color: #999;
            .segmentation
							color: #ccc;
						.order_time
							color: #3190e8;
</style>