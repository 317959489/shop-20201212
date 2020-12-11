<template>
  <div>
    <!-- 搜索框 -->
    <search></search>
    <shuffling></shuffling>
    <classgoods></classgoods>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import search from '../components/home/search'
import shuffling from '../components/home/shuffling'
import classgoods from '../components/home/classgoods'
export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
      arr: [],
    }
  },
  components: { search, shuffling, classgoods },
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      console.log(this.images);
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>