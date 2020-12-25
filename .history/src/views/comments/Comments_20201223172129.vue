<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>评论中心</div>
    </div>
    <div class="banner"></div>
    <div class="allevaluat">
      <div class="topevaluat">
        <van-tabs v-model="active">
          <van-tab title="待评价">
            <div>
              <van-card title="商品标题"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
                <template #footer>
                  <van-button size="mini">评论晒单</van-button>
                </template>
              </van-card>
            </div>
          </van-tab>
          <van-tab title="已评价">内容 2</van-tab>
        </van-tabs>
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
      active: '',
      list: [],
    }
  },
  components: {},
  methods: {
    tobeEvaluated () {
      this.$api.tobeEvaluated().then(res => {
        this.list = res.data.list
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.tobeEvaluated()
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
.banner {
  height: 180px;
  background-image: url("../../assets/evaluate.jpg");
  background-size: 100%;
}
.allevaluat {
  position: relative;
  .topevaluat {
    position: absolute;
    width: 350px;
    height: 50px;
    border-radius: 10px;
    top: -25px;
    left: 3.5%;
    background: #fff;
  }
  .van-button {
    border: red 1px solid;
  }
}
</style>