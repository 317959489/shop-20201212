<template>
  <div>
    <div class="shopcart">购物车</div>
    <div v-if="!this.username"
         class="notlogin">
      <img src="../../assets/order.gif"
           alt=""
           width="100%">
      <van-button type="primary"
                  @click="tologin">请先登录</van-button>
    </div>
    <div v-else>
      <div v-if="cart.length === 0"
           class="inlogin">
        <img src="../../assets/shop.png"
             alt=""
             width="150px">
        <p>购物车竟然是空的</p>
        <p>再忙，也要记得买点什么犒劳自己~</p>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)"
                    @click="tohome">
          去逛逛
        </van-button>
      </div>
      <div v-else>
        <div class="carttop">
          <van-checkbox v-model="checked"
                        shape="square"
                        checked-color="#ee0a24"
                        @click="allcheck">全选</van-checkbox>
          <div class="cartright">
            <p>合计：{{total}}</p>
            <p>请确认订单</p>
          </div>
        </div>
        <div class="del">
          <button @click="delgoods()">删除</button>
          <button @click="tosettle">去结算</button>
        </div>
        <div class="allshopgoods">
          <div class="shopgoods"
               v-for="(item,index) in cart"
               :key="index">
            <van-checkbox v-model="item.check"
                          shape="square"
                          checked-color="#ee0a24"
                          @click="itemcheck()"></van-checkbox>
            <div class="img">
              <img :src="item.image_path"
                   alt=""
                   width='80px'>
            </div>
            <div class="shopname">
              <p>{{item.name}}</p>
              <p>￥{{item.present_price}}</p>
            </div>
            <van-stepper v-model="item.count"
                         theme="round"
                         button-size="22"
                         disable-input
                         @change="addnum(item)" />
          </div>
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
      checked: false,
      // value: '',
      username: '',
      cart: [],
      id: [],
      arr: [],
      goodsId: [],
    }
  },
  components: {},
  methods: {

    itemcheck (value) {
      if (this.cart.every(item => {
        return item.check === true
      })) {
        this.checked = true
      } else {
        this.checked = false
      }

    },
    allcheck () {
      this.cart.map(item => {
        item.check = this.checked
      })
    },
    tohome () {
      this.$router.push('/')
    },
    tologin () {
      this.$router.push('/login')
    },
    // 加减商品数量
    addnum (item) {
      this.$api.editCart({
        count: item.count,
        id: item.cid,
        mallPrice: item.mallPrice
      }).then(res => {
        // console.log(res);

      })
    },
    // 购物车删除
    delgoods () {
      this.getcid()
      this.$api.deleteShop(this.id).then(res => {
        this.id = []
        // console.log(res);
      }).catch(err => {
        console.log(err);
      })
      this.getcart()
    },
    // 获取购物车数据
    getcart () {
      this.$api.getCard().then(res => {
        this.cart = res.shopList
        console.log(res.shopList);
      }).catch(err => {
        console.log(err);
      })
    },
    // 获取删除商品的id
    getcid () {
      this.cart.map(item => {
        if (item.check === true) {
          this.id.push(item.cid)
        }
      })
      // console.log(this.id.length);
    },
    // 提交订单
    tosettle () {
      this.cart.map(item => {
        if (item.check) {
          this.goodsId.push(item)
          this.$router.push({
            path: '/settlement',
            query: { id: JSON.stringify(this.goodsId), }
          })
        }
      })
      // console.log(this.goodsId);


    }
  },
  mounted () {
    this.username = JSON.parse(localStorage.getItem('username'))
    this.getcart()
  },
  computed: {
    total () {
      let total = 0
      this.cart.map(item => {
        if (item.check === true) {
          total += item.count * item.present_price
        }
      })
      return total.toFixed(2)
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.notlogin {
  display: flex;
  flex-direction: column;
  align-items: center;
  .van-button {
    width: 130px;
  }
}
.inlogin {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.shopcart {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-bottom: 1px solid rgb(238, 238, 238);
}
.carttop {
  background: #fff;
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(238, 238, 238);
  align-items: center;
  .van-checkbox {
    margin-left: 15px;
  }
  .cartright {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 100px;
    p {
      margin: 0;
    }
  }
}
.del {
  height: 65px;
  background: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    padding: 10px 20px;
    outline: none;
    border: none;
    background: rgb(230, 5, 127);
    color: #fff;
    margin-right: 10px;
    border-radius: 3px;
  }
}
.allshopgoods {
  height: 65vh;
  overflow: auto;
}
.shopgoods {
  display: flex;
  align-items: center;
  border-top: rgb(238, 238, 238) 1px solid;
  position: relative;
  overflow: auto;
  .van-checkbox {
    margin-left: 15px;
  }
  .img {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(238, 238, 238);
    margin-left: 20px;
  }
  .shopname {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: red;
    margin-left: 15px;
    .namebottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .van-stepper {
    position: absolute;
    bottom: 15px;
    right: 25px;
  }
}
</style>