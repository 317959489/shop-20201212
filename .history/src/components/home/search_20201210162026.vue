<template>
  <div>
    <template>

      <span>地址n</span>
      <van-search v-model="value"
                  show-action
                  placeholder="请输入搜索关键词"
                  @search="onSearch">

        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </template>
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
      console.log(11);
    },

    city () {
      this.$router.push('/city')
    }
  },
  mounted () {

  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
</style>