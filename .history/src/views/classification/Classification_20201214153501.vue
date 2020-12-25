<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <van-tree-select height="55vw"
                       :items="items"
                       :main-active-index.sync="active">

      </van-tree-select>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import content from '../../components/content/Content'
export default {
  name: '',
  props: {},
  data () {
    return {
      arr: [],
      active: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }],
    }
  },
  components: { Content, },
  methods: {},
  mounted () {
    this.arr = this.$route.query.arr
    console.log(this.arr);
    this.$api.classification().then(res => {
      console.log(res);
    })

  },
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
  position: fixed;
}
.left {
  background: rgb(241, 248, 255);
  position: fixed;
  left: 0;
  top: 41px;
}
</style>