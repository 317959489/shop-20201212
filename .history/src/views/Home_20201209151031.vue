<template>
  <div>
    <!-- 搜索框 -->
    <search></search>
    <shuffling :images='images'></shuffling>
    <classgood :arr='arr'></classgood>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import search from '../components/home/search'
import shuffling from '../components/home/shuffling'
import classgood from '../components/home/classgood'
export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
      arr: [],
    }
  },
  components: { search, shuffling, classgood },
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      console.log(res.data);
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