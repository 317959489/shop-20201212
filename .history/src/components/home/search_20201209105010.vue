<template>
  <div>
    <van-search v-model="value"
                show-action
                label="地址"
                placeholder="请输入搜索关键词"
                @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      value: '',
    }
  },
  components: {},
  methods: {
    onSearch () {
      console.log(111);
    }
  },
  mounted () {
    this.$api.recommend().then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>