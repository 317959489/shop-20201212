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
      console.log(111);
    }).catch(err => {
      console.log(err);
      console.log(222);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>