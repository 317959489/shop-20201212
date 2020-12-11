<template>
  <div class="shuffling">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

import Vue from 'vue';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

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
      this.images = res.data.slides;
      console.log(this.images);
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.shuffling {
  width: 100%;
  height: 30px;
}
.van-swipe-item {
  width: 375px;
  height: 200px;
  img {
    width: 375px;
    height: 200px;
  }
}
</style>