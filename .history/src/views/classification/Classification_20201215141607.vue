<template>
  <div>
    <div class="top">商品分类</div>
    <div class="left">
      <van-sidebar v-model="activeKey"
                   @change="onchange">
        <van-sidebar-item v-for="(item,index) in arr"
                          :key="index"
                          :title='item.mallCategoryName' />
      </van-sidebar>
    </div>
    <div class="second">
      <van-tabs :ellipsis='false'>
        <van-tab v-for="(con,inx) in arr1"
                 :title="con.mallSubName"
                 :key="inx">
          内容
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
  methods: {

    onchange () {
      this.arr1 = this.arr[this.activeKey].bxMallSubDto
      console.log(this.arr1);

    }
  },
  mounted () {
    this.$api.recommend().then(res => {
      this.arr = res.data.category;
      // console.log(res.data);
      this.arr1 = this.arr[0].bxMallSubDto
      // console.log(this.arr1);
    }).catch(err => {
      console.log(err);
    })


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
.special {
  padding: 0vw !important;
  overflow: hidden;
}
/*
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
} */
</style>