<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <ul>
        <li>新鲜水果</li>
        <li>中外名酒</li>
        <li>营养奶品</li>
        <li>食品饮料</li>
        <li>个人护理</li>
      </ul>

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
  background: rgb(241, 248, 255);
  ul {
    list-style: none;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    li {
      border-bottom: rgb(224, 63, 63);
    }
  }
}
</style>