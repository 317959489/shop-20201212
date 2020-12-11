<template>
  <div>
    <van-row class="allnew">
      <p>商品推荐</p>
      <van-row class="new">
        <van-row v-for="(item,index) in news"
                 :key="index"
                 class="newgoods">
          <van-image width="100"
                     height="100"
                     :src="item.image" />
          <p class="name">{{item.goodsName}}</p>
          <van-row class="del">
            <p>￥{{item.price}}</p>
            <p>￥{{item.mallPrice}}</p>
          </van-row>
          <van-row>

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
.allnew {
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
      .name {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
.del {
  display: flex;
  p:nth-of-type(1) {
    font-size: 16px;
    color: rgb(76, 76, 76);
  }
  p:nth-of-type(2) {
    color: rgb(165, 165, 165);
    font-size: 12px;
    text-decoration: line-through;
  }
}
</style>