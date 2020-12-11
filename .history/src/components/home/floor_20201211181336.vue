<template>
  <div>
    <div>{{name}}</div>
    <div v-for="(item,index) in arr"
         :key="index"></div>
    <img src=""
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
    this.arr.map(item => {
      console.log(item.image);
    })

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>