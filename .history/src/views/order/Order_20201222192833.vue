<template>
  <div>
    <!-- 标题 -->
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>我的订单</div>
    </div>
    <!-- 订单 -->
    <div class="outbox">
      <div class="box"
           v-for="(item,index) in arr"
           :key="index">
        <div class="serial">
          <p>订单编号：{{item.order_id}}</p>
          <p>交易完成</p>
        </div>
        <div class="goods"
             v-for="(goods,flag) in item.order_list"
             :key="flag">
          <div class="image">
            <img :src="goods.image_path"
                 alt=""
                 width="80px">
          </div>
          <p>{{goods.name}}</p>
          <div class="number">
            <p>￥{{goods.present_price}}</p>
            <p>X{{goods.count}}</p>
          </div>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      active: '',
      arr: [],
      goodslist: [],
    }
  },
  components: {},
  methods: {
    getorder () {
      this.$api.getMyOrder().then(res => {
        if (res.code === 200) {
          this.arr = res.list
          console.log(this.arr);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.getorder()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
    color: blue;
  }
}
.outbox {
  background: rgb(242, 242, 242);
  display: flex;
  flex-direction: column;
  align-items: center;
  .box {
    width: 90%;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    .serial {
      display: flex;
      justify-content: space-between;
      border-bottom: rgb(238, 238, 238) 1px solid;
    }
    .goods {
      display: flex;
      margin-top: 10px;
      .image {
        border: rgb(238, 238, 238) 1px solid;
        border-radius: 10px;
        margin-left: 10px;
      }
    }
  }
}
</style>