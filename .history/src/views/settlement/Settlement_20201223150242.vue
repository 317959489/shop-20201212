<template>
  <div>
    <div>
      <div class="top">
        <van-icon name="arrow-left"
                  @click="toshopcart" />
        <div>订单结算</div>
      </div>
      <div class="address"
           v-if="this.list === undefined">
        <div @click="toaddress">添加收货地址</div>
      </div>
      <div class="deaddress"
           v-else>
        <div class="addressleft">
          <van-icon name="location-o" />
        </div>
        <div class="addressmiddle">
          <div class="amtop">
            <p>收货人：{{this.list.name}}</p>
            <p>{{this.list.tel}}</p>
          </div>
          <p class="ammiddle">收货地址：{{this.list.address}}</p>
          <p class="ambottom">（收获不便时，可选择免费待收货服务）</p>
        </div>
        <div class="addressright"
             @click="toaddress">
          <van-icon name="arrow" />
        </div>
      </div>
      <div>
        <img src="../../assets/caitiao.jpg"
             alt=""
             width="100%">
      </div>
      <div v-for="(item,index) in goodsId"
           :key="index">
        <van-card :num='item.count'
                  :price='item.present_price'
                  :title="item.name"
                  :thumb="item.image_path" />
      </div>
      <van-submit-bar :price="total"
                      button-text="提交订单"
                      @submit="onSubmit" />
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
      id: '',
      list: {},
      goodsId: [],
      ids: [],
      allmoney: '',
    }
  },
  components: {},
  methods: {
    // 返回购物车
    toshopcart () {
      this.$router.push('/shoppingcart')
    },
    // 选择地址
    toaddress () {
      this.$router.push('/shopaddress')
    },
    // 提交订单
    onSubmit () {
      this.$api.order({
        address: this.list.tel,
        tel: this.list.tel,
        orderId: this.ids,
        totalPrice: this.allmoney,
        idDirect: false,
        count: this.list.count
      }).then(res => {
        // console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    toaddress () {
      this.$router.push('/shopAddress')
    }
  },
  mounted () {
    // 查询默认收货地址
    this.$api.getDefaultAddress().then(res => {
      this.list = res.defaultAdd
      console.log(this.list);

    }).catch(err => {
      console.log(err);
    })
    console.log('111', this.$route.query);

    // console.log(JSON.parse(this.$route.query.id))
    // 获取所有商品
    this.goodsId = JSON.parse(this.$route.query.id)
    this.goodsId.map(item => {
      this.ids.push(item.cid)
    })
    console.log(this.goodsId);
    console.log(this.id);
    // 获取所有地址
    this.$api.getAddress().then(res => {
      this.arr = res.address
      console.log(this.arr);
      this.arr.filter(item => {
        if (item._id === this.id) {
          this.list = item
        }
      })
    })
  },
  computed: {

    total () {
      let total = 0
      this.goodsId.map(item => {
        if (item.check === true) {
          total += item.count * item.present_price
          this.allmoney = total
        }
      })
      console.log(total);
      return total * 100
    }
  },
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
  }
}
.address {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.deaddress {
  display: flex;
  height: 100px;
  justify-content: space-around;
  .addressleft {
    font-size: 30px;
    width: 70px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
  .addressmiddle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .amtop {
      display: flex;
      justify-content: space-between;
    }
    p {
      margin: 0;
    }
    .ammiddle {
      font-size: 13px;
    }
    .ambottom {
      font-size: 13px;
      color: rgb(249, 209, 169);
    }
  }
  .addressright {
    font-size: 20px;
    width: 50px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
}
</style>