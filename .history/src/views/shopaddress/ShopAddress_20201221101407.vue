<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>收货地址</div>
    </div>
    <div class="notaddress"
         v-if="this.list.length === 0">
      <p>暂无收货地址~</p>
    </div>
    <div>
      <van-address-list v-model="chosenAddressId"
                        :list="list"
                        default-tag-text="默认"
                        @add="onAdd"
                        @edit="onEdit" />
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      chosenAddressId: 1,
      address: [],
      list: [],
    }
  },
  components: {},
  methods: {


    onAdd () {
      this.$router.push('/editAddress')
    },
    onEdit () {
      this.$router.push({
        path: '/modifyAddress',
        query: { id: id }
      })
    },
  },
  mounted () {
    this.$api.getAddress().then(res => {
      this.list = res.address
      this.list.map(item => {
        this.$set(item, 'id', item._id)
        if (item.isDefault) {
          this.chosenAddressId = item._id
        }
      })
      console.log(this.list);
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