<template>
  <div>
    <!-- 标题 -->
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>我的订单</div>
    </div>
    <!-- 订单 -->
    <div class="outbox">
      <div class="box">
        <div class="serial">
          <p></p>
          <p></p>
        </div>
        <div class="goods">
          <div class="image">
            <img src=""
                 alt="">
          </div>
          <p></p>
          <div class="number">
            <p></p>
            <p></p>
          </div>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
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
      active: '',
      arr: [],
      goodslist: [],
    }
  },
  components: {},
  methods: {
    getorder () {
      this.$api.getMyOrder().then(res => {
        if (res.code === 200) {
          this.arr = res.list
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.getorder()
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
    color: blue;
  }
}
.outbox {
  background: rgb(242, 242, 242);
  display: flex;
  flex-direction: column;
  align-items: center;
  .box {
    width: 90%;
    background: #fff;
    border-radius: 10px;
    .serial {
      display: flex;
      justify-content: space-between;
      border-bottom: rgb(238, 238, 238) 1px solid;
    }
  }
}
</style>