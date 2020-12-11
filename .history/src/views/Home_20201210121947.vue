<template>
  <div class="all">
    <!-- 搜索框 -->
    <van-row>
      <search></search>
    </van-row>
    <van-row>
      <shuffling :images='images'></shuffling>
    </van-row>
    <van-row>
      <classgood :arr='arr'></classgood>
    </van-row>
    <van-row>
      <courier :value='value'></courier>
    </van-row>
    <van-row>
      <recommend :news='news'></recommend>
    </van-row>
    <van-row>
      <floor></floor>
    </van-row>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import search from '../components/home/search'
import shuffling from '../components/home/shuffling'
import classgood from '../components/home/classgood'
import courier from '../components/home/courier'
import recommend from '../components/home/recommend'
import floor from '../components/home/floor'
export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
      arr: [],
      value: '',
      news: [],
      arr2: [],
    }
  },
  components: { search, shuffling, classgood, courier, recommend, floor },
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      this.value = res.data.advertesPicture.PICTURE_ADDRESS
      this.news = res.data.recommend
      this.arr2 = res.data.floor1
      // console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
    this.$api.getCard().then(res => {
      console.log(res);
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