<template>
  <div>
    <div class="sour">
      <div class="press">
        <div>地址</div>
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
  height: 50px;
  justify-content: space-between;
  align-items: center;
  .press {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 100%;
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