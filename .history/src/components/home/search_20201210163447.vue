<template>
  <div>
    <div class="sour">
      <div class="press"><span>地址</span>

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
    span ::after {
      content: " ";
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 100px solid red;
    }
  }
}
</style>