<template>
  <div>
    <div class="hotcakes"
         v-for="(item,index)in news2"
         :key="index">
      <img src="item.image"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    news2: {
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
.hotcakes {
  display: flex;
  flex-wrap: wrap;
  width: 50%;
}
</style>