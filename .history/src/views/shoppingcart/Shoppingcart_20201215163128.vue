<template>
  <div>
    <div class="shopcart">购物车</div>
    <div class="carttop">
      <div class="cartleft">
        <input type="checkbox">全选
      </div>
      <div class="cartright">
        <p>合计：</p>
        <p>请确认订单</p>
      </div>
    </div>
    <div class="del">
      <button>删除</button>
      <button>去结算</button>
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
  .cartright {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 10px;
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
    padding: 10px;
    outline: none;
    border: none;
    background: rgb(230, 5, 127);
    color: #fff;
  }
}
</style>