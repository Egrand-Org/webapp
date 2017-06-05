<template>
    <section id='foot_guide'>
        <section @click = "gotoAddress({path: '/home'})" class="guide_item">
          <span class="glyphicon glyphicon-list-alt icon_style" :class="$route.path.indexOf('home') !== -1 ? 'active' : ''"></span>
          <span>我的会议</span>
        </section>
        <section @click = "gotoAddress({path: '/issue'})" class="guide_item">
          <span class="glyphicon glyphicon-list icon_style" :class="$route.path.indexOf('issue') !== -1 ? 'active' : ''"></span>
          <span>我的议题</span>
        </section>
        <section @click = "gotoAddress('/issue')" class="guide_item">
          <span class="glyphicon glyphicon-ok icon_style" :class="$route.path.indexOf('order') !== -1 ? 'active' : ''"></span>
          <span>决策执行</span>
        </section>
        <section @click = "gotoAddress('/about')" class="guide_item">
          <span class="glyphicon glyphicon-user icon_style" :class="$route.path.indexOf('about') !== -1 ? 'active' : ''"></span>
          <span>我</span>
        </section>
    </section>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        methods: {
        	gotoAddress(path){
        		this.$router.push(path)
        	}
        },

    }

</script>

<style lang="stylus" scoped>
  #foot_guide
    background-color #fff
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 2.5rem
    display -webkit-box
    display -ms-flexbox
    display flex
    box-shadow 0 -0.02667rem 0.05333rem rgba(0,0,0,.1)
    .guide_item
      -webkit-box-flex 1
      -ms-flex 1
      flex 1
      display -webkit-box
      display -ms-flexbox
      display flex
      text-align center
      -webkit-box-orient vertical
      -webkit-box-direction normal
      -ms-flex-direction column
      flex-direction column
      -webkit-box-align center
      -ms-flex-align center
      align-items center
      .icon_style
        width: .8rem;
        height: .8rem;
        margin-bottom .2rem
        margin-top .3rem
        fill #ccc
        font-size .8rem
      .active
        color #0095FF
      span
        font-size .45rem
        color #666
</style>
