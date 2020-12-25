<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      nickname: '',
      password: '',
      verify: '',
    }
  },
  components: {},
  methods: {
    login () {
      this.$api.login().then(res => {
        nickname: this.nickname
        password: this.password
        verify: this.verify
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