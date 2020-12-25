<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>评论中心</div>
    </div>
    <div>
      <div class="">
        <img src=""
             alt="">
      </div>
      <div>
        <p></p>
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
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.list = this.$route.query.item
    console.log(this.item);
    this.$api.comment({
      id,
      rate,
      content,
      anonymous,
      _id,
      order_id,
      image,
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
</style>