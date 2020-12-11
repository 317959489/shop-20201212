<template>
  <div class="classgoods">
    <div v-for="item in arr"
         :key="item">
      <van-image width="100"
                 height="100"
                 src="" />
      <p>{{item.mallCategoryName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      arr: [],
    }
  },
  components: {},
  methods: {},
  mounted () {
    this.$api.recommend().then(res => {
      this.arr = res.data.category;
    }).catch(res => {
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.classgoods {
  width: 300px;
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
}
</style>