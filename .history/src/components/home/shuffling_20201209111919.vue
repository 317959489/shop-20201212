<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>


export default {
  name: '',
  props: {},
  data () {
    return {
      images: [],
    }
  },
  components: {},
  methods: {

  },
  mounted () {
    this.$api.recommend().then(res => {
      console.log(res.data.slides);
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