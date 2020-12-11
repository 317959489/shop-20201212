<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Lazyload } from 'vant';

export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
    }
  },
  components: {},
  methods: {

  },
  mounted () {
    this.$api.recommend().then(res => {
      this.image = res.data.slides
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