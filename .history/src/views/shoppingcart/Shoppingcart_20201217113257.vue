<template>
  <div>
    <div class="shopcart">购物车</div>
    <div class="carttop">
      <van-checkbox v-model="checked"
                    shape="square"
                    checked-color="#ee0a24">全选</van-checkbox>
      <div class="cartright">
        <p>合计：</p>
        <p>请确认订单</p>
      </div>
    </div>
    <div class="del">
      <button>删除</button>
      <button>去结算</button>
    </div>
    <van-card num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
      <template #tags>
        <van-tag plain
                 type="danger">标签</van-tag>
        <van-tag plain
                 type="danger">标签</van-tag>
      </template>
      <van-stepper v-model="value"
                   theme="round"
                   button-size="22"
                   disable-input />
    </van-card>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      checked: ''
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
</style>