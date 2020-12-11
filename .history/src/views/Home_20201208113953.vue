<template>
  <div>
    <!-- 搜索框 -->
    <search></search>
    <shuffling></shuffling>
  </div>
</template>

<script>
import search from '../components/home/search'
import search from '../components/home/shuffling'
export default {
  name: '',
  props: {},
  data () {
    return {
    }
  },
  components: { search, shuffling },
  methods: {},
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>