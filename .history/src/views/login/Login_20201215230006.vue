<template>
  <div>
    <div class="allform">
      <div class="back"
           @click="backClick">
        <van-icon name="arrow-left" />
      </div>
      <div class="form">
        <h3>登陆/注册</h3>
        <van-form @submit="onSubmit">
          <van-field v-model="username"
                     name="用户名"
                     placeholder="USERNAME"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password"
                     type="password"
                     name="密码"
                     placeholder="PASSWORD"
                     :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-model="tel"
                     type="tel"
                     label="手机号"
                     placeholder="仅注册需要" />
          <van-field v-model="sms"
                     center
                     clearable
                     label="短信验证码"
                     placeholder="仅注册需要">
            <template #button>
              <van-button size="small"
                          type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <div class="verify">
            <van-field v-model="smm"
                       center
                       clearable
                       label="验证码"
                       placeholder="请输入验证码">
            </van-field>
            <div v-html="this.verify"></div>
          </div>
        </van-form>
        <van-button type="primary"
                    size="normal">登录</van-button>
        <van-button type="danger"
                    size="normal">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: {},
  data () {
    return {
      smm: '',
      sms: '',
      tel: '',
      username: '',
      nickname: "123",
      password: "",
      verify: '',
    }
  },
  components: {},
  methods: {
    onSubmit (values) {
      console.log('submit', values);
    }
  },
  mounted () {

    this.$api.verify().then(res => {
      this.verify = res
    }).catch(err => {
      console.log(err);
    })
    // this.$api.register({
    //   nickname: this.nickname,
    //   password: this.password,
    //   verify: this.verify
    // }).then(res => {
    //   // console.log(res.data);
    // }).catch(err => {
    //   console.log(err);
    // })

  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.allform {
  width: 100%;
  height: 100vh;
  background: red;
  position: relative;
}
.back {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: rgb(127, 127, 127);
  color: #fff;
  z-index: 1;
}
.form {
  width: 330px;
  height: 500px;
  background: #fff;
  padding: 5px;
  position: absolute;
  top: 110px;
  left: 17px;
}
.verify {
  display: flex;
}
.van-field {
  border-bottom: 1px solid rgb(238, 238, 238);
}
</style>