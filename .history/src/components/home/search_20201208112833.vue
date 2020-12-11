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
    }
  },
  components: {},
  methods: {
    onSearch (a) {
      console.log(a);
    }
  },
  mounted () { },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>