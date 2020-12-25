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
          <!--------------------------------- 轮播图 ------------------------------------->
          <van-row class="shuffling">
            <shuffling :images='images'></shuffling>
          </van-row>
          <!--------------------------------- 分类导航 ---------------------------------->
          <van-row>
            <classgood :arr='arr'></classgood>
          </van-row>
          <!---------------------------------- 长图 ------------------------------------>
          <van-row>
            <courier :value='value'></courier>
          </van-row>
          <!--------------------------------- 商品推荐 ---------------------------------->
          <van-row>
            <recommend :news='news'></recommend>
          </van-row>
          <!----------------------------------- 楼层 ------------------------------------>
          <van-row>
            <floor :name='name1'
                   :arr='arr1'
                   v-if="arr1.length > 0">
              <template v-slot:id>
                <div class="fff">1F</div>
              </template>
            </floor>
            <floor :name='name2'
                   :arr='arr2'
                   v-if="arr2.length > 0">
              <template v-slot:id>
                <div class="fff">
                  2F
                </div>
              </template>
            </floor>
            <floor :name='name3'
                   :arr='arr3'
                   v-if="arr3.length > 0">
              <template v-slot:id>
                <div class="fff">3F</div>
              </template>
            </floor>
          </van-row>
          <van-row>
            <hotcakes :news2='news2'></hotcakes>
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
import hotcakes from '../components/home/hotcakes'
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
      news2: [],
    }
  },
  components: { search, shuffling, classgood, courier, recommend, floor, hotcakes },
  methods: {
    toclass (arr) {
      this.$router.push({
        query: { arr: arr }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.BScroll = new BScroll(this.$refs.wrapper, {
        pullUpLoad: true,
        scrollbar: true,
        pullDownRefresh: true,
        click: true,
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
      this.news2 = res.data.hotGoods
      // console.log(this.shopname);
      // console.log(this.name1);
      // console.log(res.data);
      console.log(this.arr);
    }).catch(err => {
      console.log(err);
    })
    this.toclass(this.arr)
    console.log(this.arr);


  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.all {
  height: 100vh;
  overflow: hidden;
  background-color: rgb(238, 238, 238);
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
  font-size: 14px;
}
</style>