<template>
  <div>
    <div class="top">个人资料</div>
    <van-cell-group>
      <van-field value="github"
                 readonly />
      <van-field label="头像"
                 readonly />
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
                 placeholder="请输入日期" />
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
    }
  },
  components: {},
  methods: {},
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
</style>