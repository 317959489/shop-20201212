<template>
  <div>
    <div>
      <div>
        <div></div>
      </div>
      <div></div>
    </div>
    <div></div>
    <div></div>
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
    shopname: {
      type: Array,
      required: true
    }
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
.floor {
  width: 100px;
  height: 100px;
  background-color: red;
  color: #fff;
}
</style>