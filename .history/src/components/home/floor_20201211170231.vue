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
           v-for="(item2,index) in arr"
           :key="index">
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
      type: Object,
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
    // console.log(this.arr);
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.allfloor {
  display: flex;
  flex-direction: column;
  align-items: center;
  .floorname {
    display: flex;
  }
}
.floor {
  width: 100px;
  height: 100px;
  background-color: red;
  color: #fff;
}
</style>