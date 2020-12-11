<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active"
                active-color="#ee0a24"
                inactive-color="#000">
      <van-tabbar-item name="home"
                       replace
                       to="/"
                       icon="wap-home-o">商城</van-tabbar-item>
      <van-tabbar-item replace
                       to="/classification"
                       icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace
                       to="/shoppingcart"
                       icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item replace
                       to="/mine"
                       icon="setting-o">我的</van-tabbar-item>
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
    }
  },
  components: {},
  methods: {},
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>