<template>
  <div>
    <div class="sour">
      <div class="press">
        <p>地址</p>
        <div class="triangle"></div>
      </div>
      <van-search v-model="value"
                  placeholder="请输入搜索关键词" />

      <button>搜索</button>
    </div>
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

<style lang="scss" scoped>
.sour {
  display: flex;
  justify-content: space-between;
  .press {
    .triangle {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid black;
    }
  }
}
</style>