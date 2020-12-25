<template>
  <div class="van_index_tab">
    <div class="top">
      <van-icon name="arrow-left" />
      <div>城市列表</div>
    </div>
    <van-search v-model="value"
                placeholder="请输入城市关键字" />

    <van-index-bar>
      <div>当前城市</div>
      <van-row class="nowcity">
        <div class="ncson">重庆</div>
      </van-row>
      <div>热门城市</div>
      <van-row class="nowcity">
        <div class="ncson">重庆</div>
        <div class="ncson">重庆</div>
        <div class="ncson">重庆</div>
        <div class="ncson">重庆</div>
        <div class="ncson">重庆</div>
        <div class="ncson">重庆</div>
      </van-row>
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
      area: '',
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
.van_index_tab {
  background-color: rgb(238, 238, 238);
}
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
.nowcity {
  background-color: #fff;
  height: 50px;
  padding: 10px;
}
.ncson {
  border: 1px solid rgb(165, 161, 161);
  width: 100px;
  height: 20px;
  display: flex;
  text-align: center;
  font-size: 15px;
}
</style>