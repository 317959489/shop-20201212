<template>
  <div class="allcakes">
    <div class="hotcakes"
         v-for="(item,index) in news2"
         :key="index">
      <img :src="item.image"
           alt=""
           width="100%">
      <div>{{item.name}}</div>
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
.allcakes {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  .hotcakes {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
}
</style>