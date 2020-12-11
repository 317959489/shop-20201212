<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active"
                active-color="#ee0a24"
                inactive-color="#000">
      <van-tabbar-item replace
                       to="/"
                       icon="home-o">商城</van-tabbar-item>
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
      active: '',
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