<template>
  <div>
    <div>
      <div class="top">
        <van-icon name="arrow-left"
                  @click="backClick" />
        <div>订单结算</div>
      </div>
      <div class="address">
        <p>添加收货地址</p>
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
    }
  },
  mounted () {
    this.api.order().then(res => {
      console.log(res);
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
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
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