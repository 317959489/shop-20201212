<template>
  <div>
    <div class="top">会员中心</div>
    <div class="mine">
      <div class="center">
        <div class="portrait"></div>
        <h4>欢迎您：小白</h4>
        <p>退出登录</p>
      </div>
      <van-icon name="setting" />
    </div>
    <div class="five">
      <ul>
        <li>
          <van-icon name="pending-payment" />待付款
        </li>
        <li>
          <van-icon name="send-gift-o" />待发货
        </li>
        <li>
          <van-icon name="logistics" />待收货
        </li>
        <li>
          <van-icon name="comment-o" />待评价
        </li>
        <li>
          <van-icon name="points" />已完成
        </li>
      </ul>
    </div>
    <div class="end">
      <div class="oneleft">
        <van-icon name="records" />全部订单
      </div>
      <div class="oneright">
        <van-icon name="arrow" />
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
    }
  },
  components: {},
  methods: {},
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #fff;
}
.mine {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(227, 12, 123);
  position: relative;
  .center {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    height: 150px;
    align-items: center;
    .portrait {
      width: 70px;
      height: 70px;
      background: #fff;
      border-radius: 50%;
    }
    h4 {
      margin: 0;
      font-size: 20px;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
  .van-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    color: #fff;
  }
}
.five {
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      width: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .van-icon {
        font-size: 30px;
      }
    }
  }
}
.end {
  background: #fff;
  width: 94.6%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .oneleft {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .van-icon {
      font-size: 20px;
    }
  }
}
</style>