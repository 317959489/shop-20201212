<template>
  <div>

    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
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
    var map = new AMap.Map('container', {
      resizeEnable: true
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>