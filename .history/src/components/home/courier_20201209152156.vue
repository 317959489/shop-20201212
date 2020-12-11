<template>
  <div>
    <van-image width="100"
               height="100"
               :src="value" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    value: {
      type: String,
      required: true,
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

<style lang='scss' scoped>
</style>