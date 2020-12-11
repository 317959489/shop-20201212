<template>
  <div>
    <div class="floor"
         v-for="item in name"
         :key="item">
      1F{{item.floor1}}
      {{item.image}}
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
  mounted () { },
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