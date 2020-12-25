<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <van-sidebar v-model="activeKey"
                   v-for="(item,index) in arr"
                   :key="index">
        <van-sidebar-item title="你好" />
        {{item.mallCategoryName}}
      </van-sidebar>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      arr: [],
      activeKey: 0,
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.arr = res.data.category;
      console.log(this.arr);
    }).catch(err => {
      console.log(err);
    })

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
//.left {
// background: rgb(241, 248, 255);
// position: fixed;
/// left: 0;
// top: 41px;
//}
//.van-sidebar-item--select:before {
//background: white;
//}
</style>