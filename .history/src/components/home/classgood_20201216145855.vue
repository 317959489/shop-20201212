<template>
  <div class="classgoods">
    <div v-for="(item,index) in arr"
         :key="index"
         @click="toClass(item.mallCategoryId)">
      <van-image width="50"
                 height="50"
                 :src="item.image" />
      {{item.mallCategoryName}}
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
  methods: {
    toClass (id) {
      this.$router.push({
        path: '/classification',
        query: { id: id }
      })
    }
  },
  mounted () {
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.classgoods {
  width: 320px;
  height: 70px;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  font-size: 14px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>