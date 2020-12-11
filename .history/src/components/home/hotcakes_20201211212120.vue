<template>
  <div class="allcakes">
    <div class="hotcakes"
         v-for="(item,index) in news2"
         :key="index">
      <img :src="item.image"
           alt=""
           width="100%">
      <div class="textcakes">{{item.name}}</div>
      <div class="pricecakes">
        <p>￥{{item.price}}</p>
        <p>￥{{item.mallPrice}}</p>
      </div>
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
    width: 49%;
    border: 1px solid rgb(238, 238, 238);
    .textcakes {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .pricecakes {
      display: flex;
      height: 30px;
      justify-content: center;
      .pricecakes:nth-of-type(1) {
        font-size: 16px;
      }
    }
  }
}
</style>