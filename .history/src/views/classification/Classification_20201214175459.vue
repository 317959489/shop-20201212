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
        <van-tab v-for="index in 10"
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
      arr1: [],
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

    this.arr1 = this.arr[0].bxMallSubDto
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid rgb(238, 238, 238);
  position: fixed;
}
.left {
  height: 100vh;
  position: fixed;
  left: 0;
  top: 51px;
  background: rgb(241, 248, 255);
}
.second {
  position: fixed;
  top: 50px;
  left: 95px;
}
.van-tab {
  height: 50px;
  width: 85px;
}
.van-sidebar {
  width: 95px;
  height: 50px;
}
.van-sidebar-item {
  background: rgb(241, 248, 255);
  font-size: 16px;
}
.van-sidebar-item--select:before {
  background: white;
}
</style>