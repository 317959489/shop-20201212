<template>
  <div>
    <div>{{name}}</div>
    <div class="floorphone"
         v-for="(item,index) in arr"
         :key="index"></div>
    <img src="item.image"
         alt="">
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
</style>