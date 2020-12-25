<template>
  <div>
    <div class="floortext">
      <div>
        <slot name="id"></slot>
      </div>
      <div>{{name}}</div>
    </div>
    <div class="floorphone">
      <img v-for="(item,index) in arr"
           :key="index"
           :src="item.image"
           alt=""
           width="50%"
           @click="todet(item.goodsId)">
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
  methods: {
    todet (id) {
      this.$router.push({
        path: '/goodsdetails',
        query: { goodId: id }
      })
    },
  },
  mounted () {
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.floortext {
  height: 30px;
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
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