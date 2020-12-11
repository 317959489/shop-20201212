<template>
  <div>
    <div>{{name}}</div>
    <div class="floorphone"
         v-for="(item,index) in arr"
         :key="index">
      <img :src="item.image"
           alt=""
           width="60"
           height="30">
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
.floorphone {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>