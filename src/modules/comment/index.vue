<template>
  <div class="comment">
    <div class="page-field">
      <div class="page-part">
        <mt-field v-model="content" placeholder="写下您的需求和建议" type="textarea" rows="10" class="comment_font"></mt-field>
        <mt-field v-model="contact" placeholder="联系方式（邮箱、QQ号等）" type="text" class="comment_font"></mt-field>
      </div>
    </div>
    <div class="page-button">
      <div class="page-button-group">
        <mt-button type="primary" size="large" @click="save" style="padding: .5rem; margin: .5rem; width: 94%; border-radius: .5rem;">提交</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        content: "",
        contact: ""
      }
    },
    methods: {
      save(evt) {
        console.log("建议：" + this.content);
        console.log("联系方式：" + this.contact);
      }
    },
    mounted(){
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["意见反馈", true]));
    }
  }
</script>

<style lang="css">
  .comment_font {
    border-bottom: 1px solid #e6e6e6;
  }
  a:hover {
    text-decoration: none;
    color: #000;
  }
</style>
