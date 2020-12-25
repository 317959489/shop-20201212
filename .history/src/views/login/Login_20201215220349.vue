<template>
  <div>
    <div class="allform">
      <div class="back"
           @click="backClick">
        <van-icon name="arrow-left" />
      </div>
      <div class="form">
        <h3>登陆/注册</h3>
        <input type="text"
               placeholder="USERNAME">
        <input type="text"
               placeholder="PASSWORD">
        {{this.verify}}
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
      nickname: "123",
      password: "123",
      verify: "123",
    }
  },
  components: {},
  methods: {

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
  top: 200px;
  left: 10px;
}
</style>