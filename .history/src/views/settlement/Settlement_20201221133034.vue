<template>
  <div>
    <div>
      <div class="top">
        <van-icon name="arrow-left"
                  @click="backClick" />
        <div>订单结算</div>
      </div>
      <div class="address"
           v-if="this.arr === undefined">
        <div @click="toaddress">添加收货地址</div>
      </div>
      <div class="deaddress"
           v-else>
        <div class="addressleft">
          <van-icon name="location-o" />
        </div>
        <div class="addressmiddle">
          <div class="amtop">
            <p>收货人：{{this.arr.name}}</p>
            <p>{{this.arr.tel}}</p>
          </div>
          <p class="ammiddle">收货地址：{{this.arr.address}}</p>
          <p class="ambottom">（收获不便时，可选择免费待收货服务）</p>
        </div>
        <div class="addressright">
          <van-icon name="arrow" />
        </div>
      </div>
      <div>
        <img src="../../assets/caitiao.jpg"
             alt=""
             width="100%">
      </div>
      <div>
        <van-card num="2"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      </div>
      <van-submit-bar :price="3050"
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
      arr: {},
    }
  },
  components: {},
  methods: {
    onSubmit () {
      console.log(111);
    },
    toaddress () {
      this.$router.push('/shopAddress')
    }
  },
  mounted () {
    this.arr = this.$route.query.item
    console.log(this.arr);
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
    width: 50px;
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