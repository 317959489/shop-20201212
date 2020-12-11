<template>
  <div>
    <div class="allfloor"
         v-for="(item,index) in shopname"
         :key="index">
      <div class="floorname">
        <div>
          <p>{{index}}F</p>
        </div>
        <div>{{item}}</div>
      </div>
      <div class="floorcart"
           v-for="item in arr"
           :key="item">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    arr: {
      type: Array,
      required: true
    },
    shopname: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted () {
    console.log(this.arr);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.floor {
  width: 100px;
  height: 100px;
  background-color: red;
  color: #fff;
}
</style>