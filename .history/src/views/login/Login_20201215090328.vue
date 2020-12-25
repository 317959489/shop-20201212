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
  methods: {
    login () {
      this.$api.login().then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.login()
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>