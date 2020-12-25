<template>
  <div>
    <div>
      <div class="top">
        <van-icon name="arrow-left"
                  @click="backClick" />
        <div>订单结算</div>
      </div>
      <div class="address">
        <div @click="toaddress">添加收货地址</div>
      </div>
      <div>
        <div>
          <van-icon name="location-o" />
        </div>
        <div>
          <div>
            <p>收货人：</p>
            <p></p>
          </div>
          <p>收货地址：</p>
          <p>（收获不便时，可选择免费待收货服务）</p>
        </div>
        <div>
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
  height: 80px;
}
</style>