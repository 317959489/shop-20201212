<template>
  <div>
    <div class="floor"></div>
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
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.floor {
  width: 10px;
  height: 10px;
  background-color: red;
  color: #fff;
}
</style>