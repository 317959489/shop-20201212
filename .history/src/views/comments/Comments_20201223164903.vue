<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>评论中心</div>
    </div>
    <div class="banner"></div>
    <div class="allevaluat">
      <div class="topevaluat"></div>
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
}
</style>