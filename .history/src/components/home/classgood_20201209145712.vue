<template>
  <div class="classgoods">
    <div v-for="(item,index) in arr"
         :key="index">
      <van-image width="50"
                 height="50"
                 src="item.image" />
      <p>{{item.mallCategoryName}}</p>
    </div>
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
      required: true,
    }

  },
  data () {
    return {

    }
  },
  components: {},
  methods: {},
  mounted () {
    console.log(this.arr);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.classgoods {
  width: 300px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
}
</style>