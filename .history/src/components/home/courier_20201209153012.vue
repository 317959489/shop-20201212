<template>
  <div>
    <van-row>
      <van-image width="360"
                 height="30"
                 :src="value" />
    </van-row>
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

<style lang="scss" scoped>
</style>