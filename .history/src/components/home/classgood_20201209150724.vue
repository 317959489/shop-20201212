<template>
  <div class="classgoods">
    <div v-for="(item,index) in arr"
         :key="index">
      <van-image width="60"
                 height="60"
                 :src="item.image" />
      <p>{{item.mallCategoryName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    arr: {
      type: Array,
      required: true,
    }

  },
  data () {
    return {

    }
  },
  components: {},
  methods: {},
  mounted () {
    console.log(this.arr);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.classgoods {
  width: 350px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  font-size: 14px;
}
</style>