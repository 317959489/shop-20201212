<template>
  <div class="all">
    <router-view></router-view>
    <van-tabbar v-model="active"
                active-color="#ee0a24"
                inactive-color="#000">
      <van-tabbar-item name="home"
                       replace
                       to="/"
                       icon="wap-home-o">商城</van-tabbar-item>
      <van-tabbar-item name='Classification'
                       replace
                       to="/classification"
                       icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item name='Shoppingcart'
                       replace
                       to="/shoppingcart"
                       icon="shopping-cart"
                       badge="this.arr.length">购物车</van-tabbar-item>
      <van-tabbar-item name='Mine'
                       replace
                       to="/mine"
                       icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: '',
  props: {},
  data () {
    return {
      active: 'home',
      arr: [],
    }
  },
  components: {},
  methods: {

  },
  mounted () {
    this.$api.getCard().then(res => {
      this.arr = res.shopList
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>