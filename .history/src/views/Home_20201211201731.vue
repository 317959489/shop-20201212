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
            <floor :name='name1'
                   :arr='arr1'
                   v-if="arr1.length > 0">
              <div class="fff">1F</div>
            </floor>
            <floor :name='name2'
                   :arr='arr2'
                   v-if="arr2.length > 0">
              <div class="fff">1F</div>
            </floor>
            <floor :name='name3'
                   :arr='arr3'
                   v-if="arr3.length > 0">
              <div class="fff">1F</div>
            </floor>
          </van-row>

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
      shopname: -1,
      BScroll: null,
      name1: '',
      name2: '',
      name3: '',
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
      this.shopname = res.data.floorName
      this.name1 = this.shopname.floor1
      this.name2 = this.shopname.floor2
      this.name3 = this.shopname.floor3
      // console.log(this.shopname);
      // console.log(this.name1);
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
  margin-top: 15px;
}
.wrapper {
  height: 100vh;
  // overflow: hidden;
}
.fff {
  width: 20px;
  height: 20px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
}
</style>