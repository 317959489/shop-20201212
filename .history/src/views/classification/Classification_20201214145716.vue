<template>
  <div>
    <div class="top">商品分类</div>

    <van-tabs>
      <van-tab v-for="index in 8"
               :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      arr: [],
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.arr = this.$route.query.arr
    console.log(this.arr);
    this.$api.classification().then(res => {
      console.log(res);
    })

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 40px;
  background: #fff;
  text-align: center;
  line-height: 40px;
  border-bottom: 1px solid rgb(238, 238, 238);
  position: fixed;
}
.left {
  width: 80px;
  height: 90vh;
  background: rgb(241, 248, 255);
  position: fixed;
  left: 0;
  top: 41px;
  ul {
    list-style: none;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    li {
      width: 80px;
      text-align: center;
      line-height: 40px;
      border-bottom: rgb(238, 238, 238) 1px solid;
    }
  }
}
</style>