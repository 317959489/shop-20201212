<template>
  <div>
    <van-row>
      <p>商品推荐</p>
      <div v-for="(item,index) in arr"
           :key="index"></div>
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
}
</style>