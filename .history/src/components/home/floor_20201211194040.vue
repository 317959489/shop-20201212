<template>
  <div>
    <div>{{name}}</div>
    <div class="floorphone">
      <div v-for="(item,index) in arr"
           :key="index">
        <img :src="item.image"
             alt=""
             width="50%"
             height="70">
      </div>
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