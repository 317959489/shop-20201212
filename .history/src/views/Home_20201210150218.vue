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
      <floor1></floor1>

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
import floor1 from '../components/home/floor1'
export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
      arr: [],
      value: '',
      news: [],
      arr1: [],
      arr2: [],
      arr3: [],
    }
  },
  components: { search, shuffling, classgood, courier, recommend, floor1, floor2, floor3 },
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      this.value = res.data.advertesPicture.PICTURE_ADDRESS
      this.news = res.data.recommend
      this.arr1 = res.data.floor1
      this.arr2 = res.data.floor2
      this.arr3 = res.data.floor3
      console.log(res.data);
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