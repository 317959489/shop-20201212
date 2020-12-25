<template>
  <div>
    <div>
      111
      <van-goods-action>
        <van-goods-action-icon icon="chat-o"
                               text="客服" />
        <van-goods-action-icon icon="shop-o"
                               text="店铺" />
        <van-goods-action-button type="warning"
                                 text="加入购物车" />
        <van-goods-action-button type="danger"
                                 text="立即购买" />
      </van-goods-action>
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
</style>