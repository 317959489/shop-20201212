<template>
  <div class="classgoods"
       v-for="(item,index) in arr"
       :key="item">
    <div>
      <img src=""
           alt="">
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
      console.log(res.data.category);
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