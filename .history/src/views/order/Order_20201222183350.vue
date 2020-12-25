<template>
  <div>
    <!-- 标题 -->
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>我的订单</div>
    </div>
    <!-- 订单 -->
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
        <div>
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
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.$api.getMyOrder().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
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
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
    color: blue;
  }
}
</style>