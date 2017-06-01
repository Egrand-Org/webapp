<template>
  <div class="attend_issue">
    <mt-checklist align="right" v-model="selectedYt" :options="canSelectedYt"></mt-checklist>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: this.$router.currentRoute.params.status,
        selectedYt: []
      }
    },
    created() {
      this.canSelectedYt = ['选项A', '选项B', '选项C', '选项D'];
    },
    mounted(){
      let status = this.$router.currentRoute.params.status;
      this.$root.$emit.apply(this.$root, ['change-header'].concat(["待安排的议题", true]));
    },
    methods: {
    }
  }
</script>

<style lang="css">

</style>
