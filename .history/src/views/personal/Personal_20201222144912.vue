<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>个人资料</div>
    </div>
    <van-cell-group>
      <van-field value="github"
                 readonly />
      <div class="Head">
        <p>头像</p>
        <img src=""
             alt=""
             width="80px"
             height="80px">
        <van-icon name="arrow" />
      </div>
      <van-field label="用户名"
                 value="输入框只读"
                 readonly />
      <van-field v-model="value"
                 label="昵称"
                 placeholder="请输入昵称" />
      <van-field v-model="value"
                 label="性别"
                 placeholder="请输入邮箱" />
      <van-field v-model="value"
                 label="邮箱"
                 placeholder="请输入邮箱" />
      <van-field v-model="value"
                 label="出生年月"
                 placeholder="请输入日期"
                 is-link
                 @click="showPopup" />
      <van-popup v-model="show"
                 position="bottom"
                 :style="{ height: '30%' }">
        <van-datetime-picker v-model="currentDate"
                             type="date"
                             title="选择年月日"
                             :min-date="minDate"
                             :max-date="maxDate" />
      </van-popup>
    </van-cell-group>

  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      value: '',
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      show: false,
    }
  },
  components: {},
  methods: {
    showPopup () {
      this.show = true;
    }
  },
  mounted () { },
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
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
    color: blue;
  }
}
.Head {
  display: flex;
  position: relative;
  height: 80px;
  align-items: center;
  p {
    margin: 0;
    left: 15px;
    position: absolute;
    font-size: 15px;
  }
  img {
    position: absolute;
    right: 30px;
  }
  .van-icon {
    position: absolute;
    right: 10px;
  }
}
</style>