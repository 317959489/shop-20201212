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
    this.$api.recommend().then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  },
  mounted () {

  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>