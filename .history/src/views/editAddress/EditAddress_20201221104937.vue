<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left"
                @click="backClick" />
      <div>添加地址</div>
    </div>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      :address-info="value"
                      show-search-result
                      :search-result="searchResult"
                      :area-columns-placeholder="['请选择', '请选择', '请选择']"
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail" />
  </div>
</template>

<script>
import { Toast } from 'vant';
import areaList from '../../js/area'
export default {
  name: '',
  props: {},
  data () {
    return {
      areaList,
      searchResult: [],
      value: {
      },
    }
  },
  components: {},
  methods: {
    onSave (v) {
      this.$api.address({
        name: v.name,
        tel: v.tel,
        address: `${v.province}${v.city}${v.county}${v.addressDetail}`,
        isDefault: v.isDefault,
        province: v.province,
        city: v.city,
        county: v.county,
        addressDetail: v.addressDetail,
        areaCode: v.areaCode,
      }).then(res => {
        console.log(res);
        console.log(v);
      }).catch(err => {
        console.log(err);
      })
      Toast('res.msg');
    },
    onDelete () {
      console.log(222);
      Toast('delete');
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
        console.log(val);
      } else {
        this.searchResult = [];
      }
    },

  },
  mounted () {

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
</style>