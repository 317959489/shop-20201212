<template>
  <div></div>
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
    this.$api.login().then(res => {
      console.log(res.data);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>