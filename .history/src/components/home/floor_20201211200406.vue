<template>
  <div>
    <div class="floortext">
      <div v-for="num in 3"
           :key="num">{{num}}</div>
      <div>{{name}}</div>
    </div>
    <div class="floorphone">
      <img v-for="(item,index) in arr"
           :key="index"
           :src="item.image"
           alt=""
           width="50%">
    </div>
  </div>
</template>

<script>
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
.floortext {
  display: flex;
}
.floorphone {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  img {
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
}
</style>