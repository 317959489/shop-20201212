<template>
  <div>
    <van-row>
      <p>商品推荐</p>
      <div v-for="(item,index) in news"
           :key="index"
           class="new">
        <van-image width="100"
                   height="100"
                   :src="item.image" />
        <p>{{item.goodsName}}</p>
      </div>
    </van-row>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    news: {
      type: Array,
      required: true
    }
  },
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
.van-row {
  background-color: #fff;
  .new {
    display: flex;
  }
}
</style>