<template>
  <div>
    <div class="allfloor">
      <div class="floorname"
           v-for="(item,index) in shopname"
           :key="index">
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
    // console.log(this.arr);
    console.log(this.shopname);
    this.shopname.map(item => {
      this.name = item
    })
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