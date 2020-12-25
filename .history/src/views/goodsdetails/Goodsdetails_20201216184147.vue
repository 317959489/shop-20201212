<template>
  <div>
    <div>
      <div class="back"
           @click="backClick">
        <van-icon name="arrow-left" />
      </div>
      <div class="img"
           @click="preview">
        <van-swipe>
          <van-swipe-item>
            <img :src="this.arr.image"
                 alt=""
                 width="100%"
                 height="375px">
          </van-swipe-item>
          <van-swipe-item>
            <img :src="this.arr.image"
                 alt=""
                 width="100%"
                 height="375px">
          </van-swipe-item>
        </van-swipe>

      </div>
      <div class="goodsname">
        <p>{{this.arr.name}}</p>
        <p>￥{{this.arr.present_price}}</p>
      </div>
      <div class="goodsnum">
        <div>
          <p>运费：{{this.arr.__v}}</p>
        </div>
        <div>
          <p>剩余：{{this.arr.amount}}</p>
        </div>
        <div @click="collect">
          <p>已收藏
            <van-icon name="like" />
          </p>
          <p>收藏

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
        <van-tab title="商品详情">
          <div v-html="arr.detail"
               style='font-size : 0'></div>
        </van-tab>
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
import { ImagePreview } from 'vant';

export default {
  name: '',
  props: {},
  data () {

    return {
      active: '',
      id: '',
      arr: [],
      arr1: [],
    }
  },
  components: {},
  methods: {
    preview () {
      ImagePreview([
        this.arr.image,
        this.arr.image,
      ]);
    },
    collect () {
      this.$api.collection(this.arr).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    getNews () {
      this.$api.goods(
        this.id
      ).then(res => {
        this.arr = res.goods.goodsOne
        this.arr1 = res.goods
        // console.log(this.arr);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {


    this.id = this.$route.query.goodId
    this.getNews()
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
  z-index: 1;
}
.img {
  width: 100%;
  height: 380px;

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