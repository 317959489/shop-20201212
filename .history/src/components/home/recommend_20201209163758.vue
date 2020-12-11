<template>
  <div>
    <van-row>
      <p>商品推荐</p>
      <van-row class="new">
        <van-row v-for="(item,index) in news"
                 :key="index"
                 class="newgoods">
          <van-image width="100"
                     height="100"
                     :src="item.image" />
          <p>{{item.goodsName}}</p>
        </van-row>
      </van-row>
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
    .newgoods {
      width: 100px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>