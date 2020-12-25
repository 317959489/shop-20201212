<template>
  <div>
    <template>
      <van-image v-if="active === 0"
                 src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <van-image v-if="active === 1"
                 src="https://img.yzcdn.cn/vant/apple-2.jpg" />
    </template>
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
</style>