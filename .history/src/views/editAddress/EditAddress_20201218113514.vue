<template>
  <div>
    <van-address-edit :area-list="areaList"
                      show-postal
                      show-delete
                      show-set-default
                      show-search-result
                      :search-result="searchResult"
                      :area-columns-placeholder="['请选择', '请选择', '请选择']"
                      @save="onSave"
                      @delete="onDelete"
                      @change-detail="onChangeDetail" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      areaList,
      searchResult: [],
    }
  },
  components: {},
  methods: {
    onSave () {
      Toast('save');
    },
    onDelete () {
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
      } else {
        this.searchResult = [];
      }
    },
  },
},
mounted() { },
computed: { },
watch: { }
}
</script>

<style lang="scss" scoped>
</style>