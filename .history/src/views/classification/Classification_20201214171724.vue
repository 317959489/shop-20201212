<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <van-sidebar v-model="activeKey"
                   v-for="(item,index) in arr"
                   :key="index">
        <van-sidebar-item :title='item.mallCategoryName' />
      </van-sidebar>
    </div>
    <div class="second">
      <van-tabs>
        <van-tab v-for="index in 18"
                 :title="'标签 ' + index"
                 :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
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
  height: 58px;
  background: #fff;
  text-align: center;
  line-height: 58px;
  border-bottom: 1px solid rgb(238, 238, 238);
  position: fixed;
}
.left {
  height: 100vh;
  position: fixed;
  left: 0;
  top: 59px;
  background: rgb(241, 248, 255);
}
.second {
  position: fixed;
  top: 58px;
  left: 85px;
}
.van-tab {
  height: 58px;
}
.van-sidebar {
  width: 85px;
}
.van-sidebar-item {
  background: rgb(241, 248, 255);
  font-size: 16px;
}
.van-sidebar-item--select:before {
  background: white;
}
</style>