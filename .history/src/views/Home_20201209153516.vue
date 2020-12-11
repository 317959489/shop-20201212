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

  </div>
</template>

<script>
import BScroll from 'better-scroll'
import search from '../components/home/search'
import shuffling from '../components/home/shuffling'
import classgood from '../components/home/classgood'
import courier from '../components/home/courier'
export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
      arr: [],
      value: '',
    }
  },
  components: { search, shuffling, classgood, courier, },
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.images = res.data.slides;
      this.arr = res.data.category;
      this.value = res.data.advertesPicture.PICTURE_ADDRESS
      console.log(res.data.advertesPicture.PICTURE_ADDRESS);
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>