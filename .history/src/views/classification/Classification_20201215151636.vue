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
      <van-tabs :ellipsis='false'
                @click="goods"
                v-model="active">
        <van-tab v-for="(con,inx) in arr1"
                 :title="con.mallSubName"
                 :key="inx">
          <div class="goods"
               v-for="(goods,flag) in arr2"
               :key="flag">
            <img :src="goods.image"
                 alt="">
            <div class="goodstext">
              <h4>{{goods.name}}</h4>
              <div>
                <span>{{goods.present_price}}</span>
                <span>{{goods.orl_price}}</span>
              </div>
            </div>
          </div>
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
      mallSubId: '',
      arr2: [],
      active: 0,
    }
  },
  components: {},
  methods: {

    onchange () {
      this.arr1 = this.arr[this.activeKey].bxMallSubDto
      console.log(this.arr1);
      this.goods()
    },
    goods () {
      this.mallSubId = this.arr1[this.active].mallSubId
      this.$api.classification(
        this.mallSubId
      ).then(res => {
        this.arr2 = res.dataList
        console.log(this.arr2);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.$api.recommend().then(res => {
      this.arr = res.data.category;
      this.onchange()
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
  left: 80px;
}
.special {
  padding: 0vw !important;
}
.goods {
  height: 100px;
  border-bottom: 1px solid rgb(238, 238, 238);
  display: flex;
  img {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(238, 238, 238);
  }
  h4 {
    color: red;
  }
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