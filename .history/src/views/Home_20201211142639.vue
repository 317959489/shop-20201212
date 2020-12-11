<template>

  <div class="all">
    <!-- 搜索框 -->

    <van-row class="search">
      <search></search>
    </van-row>
    <div style="overflow: hidden;">
      <div class="wrapper"
           ref="wrapper">
        <div class="content">
          <!--------------------轮播图--------------------------->
          <van-row class="shuffling">
            <shuffling :images='images'></shuffling>
          </van-row>
          <!-------------------------分类导航--------------------------->
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
            <floor :shopname='shopname'
                   :arr='arr1'></floor>
            <floor :shopname='shopname'
                   :arr='arr2'></floor>
            <floor :shopname='shopname'
                   :arr='arr3'></floor>
          </van-row>

          <div>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
            <br>111<br>
          </div>
        </div>
      </div>
    </div>
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
      arr1: [],
      arr2: [],
      arr3: [],
      shopname: [],
      BScroll: null
    }
  },
  components: { search, shuffling, classgood, courier, recommend, floor },
  methods: {},
  mounted () {
    this.$nextTick(() => {
      this.BScroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: true,
        scrollbar: true,
        pullDownRefresh: true
        // and so on
      })
    })
    setTimeout(() => {
      this.BScroll.refresh()
    }, 1000);
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      this.value = res.data.advertesPicture.PICTURE_ADDRESS
      this.news = res.data.recommend
      this.arr1 = res.data.floor1
      this.arr2 = res.data.floor2
      this.arr3 = res.data.floor3
      this.name = res.data.floorName
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
.all {
  height: 100vh;
  overflow: hidden;
}
.search {
  height: 55px;
  z-index: 10000;
  position: fixed;
  background: rgb(238, 238, 238);
  top: 0;
  left: 0;
  right: 0;
}
.shuffling {
  margin-top: 55px;
}
.wrapper {
  height: 100vh;
  // overflow: hidden;
}
</style>