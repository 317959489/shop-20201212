<template>
  <div>
    <div>{{name}}</div>
    <div class="floorphone"
         v-for="(item,index) in arr"
         :key="index"></div>
    <van-image width="100"
               height="100"
               :src="item.image" />
  </div>
</template>

<script>
import Vue from 'vue';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
export default {
  name: '',
  props: {
    arr: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: [],
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted () {
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>