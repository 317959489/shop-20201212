<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>我的收藏</div>
    </div>
    <div>
      <van-card price="2.00"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #footer>
          <van-button size="mini">x</van-button>
        </template>
      </van-card>
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
  mounted () {
    this.$api.collectionlist().then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
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
  }
}
</style>