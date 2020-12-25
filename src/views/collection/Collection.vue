<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>我的收藏</div>
    </div>
    <div v-for="(item,index) in list"
         :key="index"
         slot-scope="">
      <van-card :price="item.present_price"
                :title="item.name"
                :thumb="item.image_path">
        <template #footer>
          <van-button size="mini"
                      @click="delgoods">x</van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      list: [],
    }
  },
  components: {},
  methods: {
    delgoods () {
      this.$api.cancelCollection().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted () {
    this.$api.collectionlist().then(res => {
      this.list = res.data.list;
    }).catch(err => {
      console.log(err);
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
  border-bottom: 1px solid rgb(238, 238, 238);
  .van-icon {
    position: absolute;
    left: 10px;
  }
}
.van-card {
  margin-top: 10px;
  border-bottom: rgb(238, 238, 238);
  .van-card__price {
    color: red;
    font-weight: 600;
  }
}
</style>