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
        <div class="del">
          <button>删除</button>
          <button>去结算</button>
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
}
.carttop {
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
  .cartright {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .del {
      display: flex;
      button {
        background: rgb(230, 5, 127);
        color: #fff;
      }
    }
  }
}
</style>