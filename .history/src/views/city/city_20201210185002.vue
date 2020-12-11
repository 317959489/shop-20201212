<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" />
      <div>城市列表</div>
    </div>
    <van-index-bar>
      <van-index-anchor v-for="item in Object.keys(city)"
                        :key="item"
                        :index="item" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
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
      city: city.data.cities,
      area
    }
  },
  components: {},
  methods: {

  },
  mounted () {
    let amap = new AMap.Map('container', {
      resizeEnable: true
    })
    AMap.plugin('AMap.Geolocation', function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: 'RB'
      })

      geolocation.getCurrentPosition()
      AMap.event.addListener(geolocation, 'complete', onComplete)
      AMap.event.addListener(geolocation, 'error', onError)

      function onComplete (data) {
        console.log(data);
        // data是具体的定位信息
      }

      function onError (data) {
        // 定位出错
      }
    })
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
</style>