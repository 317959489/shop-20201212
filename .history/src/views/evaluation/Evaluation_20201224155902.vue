<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>评论中心</div>
    </div>
    <div class="goodsId">
      <img :src="this.list.image_path"
           alt=""
           width="100px">
      <div>
        <p>商品评分</p>
        <van-rate v-model="value" />
      </div>
    </div>
    <textarea v-model="content"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="说说你的购买感受吧~"></textarea>
    <van-checkbox v-model="checked">匿名评价</van-checkbox>
    <van-button type="primary"
                block
                @click="submit">提交</van-button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      content: '',
      list: [],
      value: 0,
      checked: false,
    }
  },
  components: {},
  methods: {
    submit () {
      this.$api.comment({
        id: this.list.cid,
        rate: this.value,
        content: this.content,
        anonymous: this.checked,
        _id: this.list._id,
        order_id: this.list.order_id,
        image: []
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.list = JSON.parse(this.$route.query.item)
    console.log(this.list);

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
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
    color: blue;
  }
}
.goodsId {
  display: flex;
  img {
    margin-left: 20px;
    margin-right: 30px;
  }
}
textarea {
  width: 371px;
  background: rgb(238, 238, 238);
  border: none;
  outline: none;
}
.van-checkbox {
  margin-left: 10px;
}
.van-button {
  width: 300px;
  margin: 20px auto;
}
</style>