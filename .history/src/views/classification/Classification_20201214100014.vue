<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <div>新鲜水果</div>
      <div>中外名酒</div>
      <div>营养奶品</div>
      <div>食品饮料</div>
      <div>个人护理</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 40px;
  background: #fff;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.left {
  width: 80px;
  height: 90vh;
}
</style>