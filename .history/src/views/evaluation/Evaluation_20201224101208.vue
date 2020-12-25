<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>评论中心</div>
    </div>
    <div class="goodsId">
      <img :src="this.list.image_path"
           alt=""
           width="100px">
      <div>
        <p>商品评分</p>
        <van-rate v-model="value" />
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
      list: {},
      value: 3,
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.list = this.$route.query.item
    console.log(this.item);
    this.$api.comment({
      id: this.list.cid,
      rate,
      content,
      anonymous,
      _id: this.list._id,
      order_id: this.list.order_id,
      image: this.list.image_path,
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
    color: blue;
  }
}
.goodsId {
  display: flex;
  img {
    margin-left: 20px;
  }
}
</style>