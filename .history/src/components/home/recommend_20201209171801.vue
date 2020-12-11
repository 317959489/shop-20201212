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
          <van-row class="del">
            <p>￥{{item.price}}</p>
            <p>￥{{item.mallPrice}}</p>
          </van-row>
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
  height: 200px;
  .new {
    display: flex;
    overflow: auto;
    height: 500px;
    .newgoods {
      width: 33.33%;

      border: 1px solid rgb(238, 238, 238);
      margin-right: -1px;
      p {
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        .del {
          display: flex;
          p {
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>