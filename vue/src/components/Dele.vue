<template>
  <div class="wrapper">
     <van-card 
  :num="list.number"
  :price="list.price"
  :desc="list.hot"
  :title="list.name"
  :thumb="list.img"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      list:""
    };
  },
  watch: {},
  computed: {},
  methods: {
       
  },
  created() {},
  mounted() {
    this.list= this.$route.query.id
  }
};
</script>
<style  scoped>
.wrapper{
    width: 100%;
}
</style>