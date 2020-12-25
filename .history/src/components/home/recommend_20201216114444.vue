<template>
  <div>
    <van-row class="allnew">
      <p>商品推荐</p>
      <div class="container"
           ref="container">
        <div class="content">
          <div class="newgoods"
               v-for="(item,index) in news"
               :key="index"
               @click="togoodsdet(item.goodsId)">
            <van-image width="100"
                       height="100"
                       :src="item.image" />
            <p class="name">{{item.goodsName}}</p>
            <van-row class="del">
              <p>￥{{item.price}}</p>
              <p>￥{{item.mallPrice}}</p>
            </van-row>
            <van-row class="endcart">
              <van-row class="cart">
                <van-icon name="shopping-cart" />
              </van-row>
              <van-row class="endtext">
                <p>查看详情</p>
              </van-row>

            </van-row>
          </div>

        </div>
      </div>
    </van-row>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      s: null
    }
  },
  components: {},
  methods: {
    togoodsdet (id) {
      console.log(211);
      console.log(id);
      this.$router.push({
        path: '/goodsdetails',
        query: { id: id }
      })

    },
  },
  mounted () {
    console.log(this.news);
    this.$nextTick(() => {
      this.s = new BScroll(this.$refs.container, {
        scrollX: true
      })
    })
    setTimeout(() => {
      this.s.refresh()
    }, 1000);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.allnew {
  background-color: #fff;
  .container {
    width: 100%;
    display: flex;
    overflow: hidden;
    .content {
      display: flex;
      height: 210px;
      flex: 1;
      .newgoods {
        width: 33.33vw;
        text-align: center;
        border: 1px solid rgb(238, 238, 238);
        margin-right: -1px;
        .name {
          height: 18px;
          font-size: 14px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
.del {
  display: flex;
  height: 20px;
  align-items: center;
  p:nth-of-type(1) {
    font-size: 16px;
    color: rgb(76, 76, 76);
    margin-right: 5px;
  }
  p:nth-of-type(2) {
    color: rgb(165, 165, 165);
    font-size: 12px;
    text-decoration: line-through;
  }
}
.endcart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .cart {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: rgb(254, 202, 58);
  }
  .endtext {
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: rgb(255, 76, 56);
    color: #fff;
  }
}
</style>