<template>
  <div>213</div>
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

  },
  mounted () {
    this.$api.login({
      nickname: this.nickname,
      password: this.password,
      verify: this.verify
    }).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>