<template>
  <div>
    <div>
      <div class="back">
        <van-icon name="arrow-left" />
      </div>
      <div class="img"></div>
      <div class="goodsname">
        <p>猕猴桃</p>
        <p>￥8</p>
      </div>
      <div class="goodsnum">
        <div>
          <p>运费：0</p>
        </div>
        <div>
          <p>剩余：10000</p>
        </div>
        <div>
          <p>取消收藏：
            <van-icon name="like" />
          </p>
        </div>
      </div>
      <div class="goodsshop">
        <div class="shopleft">
          <van-icon name="shop-o" />
          <p>有赞的店</p>
          <div>官方</div>
        </div>
        <div class="shopright">
          <p>进入店铺</p>
          <van-icon name="arrow" />
        </div>
      </div>
      <van-tabs v-model="active">
        <van-tab title="商品详情">商品详情</van-tab>
        <van-tab title="商品评论">商品评论</van-tab>
      </van-tabs>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o"
                               text="客服" />
        <van-goods-action-icon icon="shop-o"
                               text="店铺" />
        <van-goods-action-button type="warning"
                                 text="加入购物车" />
        <van-goods-action-button type="danger"
                                 text="立即购买" />
      </van-goods-action>
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
      id: "0",
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.id = this.$route.query.id
    console.log(this.id);
    this.$api.goods({
      id: this.id
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.back {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: rgb(127, 127, 127);
  color: #fff;
}
.img {
  width: 100%;
  height: 380px;
  background: red;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.goodsname {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid rgb(238, 238, 238);
  margin-bottom: 10px;

  p {
    margin: 0 10px;
  }
  p:nth-of-type(2) {
    color: red;
  }
}
.goodsnum {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  border-bottom: 1px solid rgb(238, 238, 238);
  color: rgb(161, 166, 166);
  margin-bottom: 10px;
  p {
    margin: 0 15px;

    .van-icon {
      color: red;
      font-size: 16px;
      line-height: 30px;
    }
  }
}
.goodsshop {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  margin-bottom: 10px;
  .shopleft {
    width: 135px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      margin: 0;
      font-size: 14px;
    }
    div {
      font-size: 12px;
      border-radius: 5px;
      padding: 3px 5px;
      background: red;
      color: #fff;
    }
    .van-icon {
      font-size: 20px;
    }
  }
  .shopright {
    display: flex;
    justify-content: space-around;
    width: 100px;
    align-items: center;
    p {
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>