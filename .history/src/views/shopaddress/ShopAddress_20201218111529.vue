<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>收货地址</div>
    </div>
    <div class="notaddress">
      <p>暂无收货地址~</p>
    </div>
    <van-address-list v-model="chosenAddressId"
                      :list="list"
                      :disabled-list="disabledList"
                      disabled-text="以下地址超出配送范围"
                      default-tag-text="默认"
                      @add="onAdd"
                      @edit="onEdit" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      chosenAddressId: '1',
      address: [],
      list: [],
    }
  },
  components: {},
  methods: {

    onAdd () {
      Toast('新增地址');
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index);
    },
  },
  mounted () {
    this.$api.getAddress().then(res => {
      this.address = res.address
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
    color: blue;
  }
}
.notaddress {
  height: 200px;
  text-align: center;
  line-height: 190px;
  p {
    font-size: 20px;
    color: rgb(194, 194, 194);
  }
}
</style>