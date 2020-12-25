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
                        @change="allcheck">全选</van-checkbox>
          <div class="cartright">
            <p>合计：</p>
            <p>请确认订单</p>
          </div>
        </div>
        <div class="del">
          <button>删除</button>
          <button>去结算</button>
        </div>
        <div class="allshopgoods">
          <div class="shopgoods"
               v-for="(item,index) in cart"
               :key="index">
            <van-checkbox v-model="item.check"
                          shape="square"
                          checked-color="#ee0a24"
                          @change="itemcheck"></van-checkbox>
            <div class="img">
              <img :src="item.image_path"
                   alt=""
                   width='80px'>
            </div>
            <div class="shopname">
              <p>{{item.name}}</p>
              <p>￥50</p>
            </div>
            <van-stepper v-model="item.count"
                         theme="round"
                         button-size="22"
                         disable-input
                         @change="addnum" />
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

    }
  },
  components: {},
  methods: {

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
    addnum () {
      this.$api.editCart({
        count: this.cart.count,
        id: this.cart.cid,
        mallPrice: this.cart.mallPrice
      }).then(res => {
        console.log(res);
      })
    }
  },
  mounted () {
    this.username = JSON.parse(localStorage.getItem('username'))
    this.$api.getCard().then(res => {
      this.cart = res.shopList
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {

  },
  watch: {
    itemcheck () {
      this.checked = this.cart.every(item => {
        return item.check == true
      })
    },
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