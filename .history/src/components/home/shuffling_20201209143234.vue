<template>
  <div>
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
  props: {
    imaga: {
      type: Array,
      required: true,
    },
    arr: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {

    }
  },
  components: {},
  methods: {

  },
  mounted () {

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.van-swipe-item {
  width: 375px;
  height: 200px;
  img {
    width: 375px;
    height: 200px;
  }
}
</style>