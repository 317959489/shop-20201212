<template>
  <div>
    <div class="sour">
      <div class="press"
           @click="city">
        <div>{{newcity}}</div>
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
      newcity: '定位中…',
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
    let _this = this
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
        // console.log(data);
        _this.newcity = data.addressComponent.city
        // data是具体的定位信息
        console.log(111);
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
.van-search {
  background-color: rgb(238, 238, 238);
}
.sour {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(238, 238, 238);

  .press {
    width: 70px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    line-height: 100%;
    position: relative;
    .triangle {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid black;
      position: absolute;
      bottom: 3px;
      right: 0;
    }
  }
  button {
    outline: none;
    margin-right: 5px;
    border: none;
  }
}
</style>