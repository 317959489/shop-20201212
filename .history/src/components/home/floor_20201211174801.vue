<template>
  <div>
    <div>{{name}}</div>
    <div v-for="(item,index) in arr"
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
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted () {
    console.log(this.name);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>