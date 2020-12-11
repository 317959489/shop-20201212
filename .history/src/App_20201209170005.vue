<template>
  <router-view></router-view>

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
    console.log(this.$store.state.abc);
    this.$store.commit("set_abc", 321)
    console.log(this.$store.state.abc);

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>
