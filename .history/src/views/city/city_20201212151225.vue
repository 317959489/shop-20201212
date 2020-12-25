<template>
  <div class="van_index_tab">
    <div class="top">
      <van-icon name="arrow-left" />
      <div>城市列表</div>
    </div>
    <van-search v-model="value"
                placeholder="请输入城市关键字" />
    <van-row>
      <div>当前城市</div>
    </van-row>
    <van-index-bar>
      <template v-for="(value,key) in city">
        <van-index-anchor :key="key"
                          :index="key" />
        <van-cell v-for="item in value"
                  :title="item.name"
                  :key="item.id" />
      </template>
    </van-index-bar>

  </div>
</template>

<script>
import city from '../../js/city'
import area from '../../js/area'
export default {
  name: '',
  props: {},
  data () {
    return {
      value: '',
      city: city.data.cities,
      area
    }
  },
  components: {},
  methods: {

  },
  mounted () {

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  background-color: #fff;
  align-items: center;
  display: flex;
  justify-content: center;
  .van-icon {
    position: absolute;
    left: 10px;
  }
}
.van-search {
  background-color: rgb(238, 238, 238);
}
</style>