<template>
  <div>
    <div>{{name}}</div>
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
    // console.log(this.arr);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>