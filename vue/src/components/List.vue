<template>
  <div class="list">
    <mota></mota>
    <div class="img" v-drag>
      <img src="../assets/微信图片_20200529005553.png" alt="" />
    </div>
    <div class="cnav">
      <ul>
          <li v-for="(item,index) in bq" :key="index" :style="{background:active==index?'red':''}" @click="del(index)">
              {{item}}
          </li>
      </ul>
    </div>
    <div class="rm" v-if="active==0">
      <van-card v-for="(item,index) in shoplist " :key="index"
        :num="item.number"
        :price="item.price"
        :desc="item.hot+'人购买'"
        :title="item.name"
        :thumb="item.img"
        @click="but(item,path)"
      >
      <div class="xq"></div>
      </van-card>
    </div>
    <div class="rm" v-if="active==1">
      <van-card v-for="(item,index) in shoplist2 " :key="index"
        :num="item.number"
        :price="item.price"
        :desc="item.hot+'人购买'"
        :title="item.name"
        :thumb="item.img"
         @click="dele(item,path)"
      />
    </div>
  </div>
</template>

<script>
import mota from "../components/Mota";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    mota
  },
  props: {},
  data() {
    return {
     
    };
  },
  watch: {},
  computed: {
    ...mapState(["shoplist2","shoplist","bq","active"])
  },
  methods: {
       dele(item,path){
           this.$router.push({
               path:"/dele",
               query:{
                 id:item
               }
           })
       },
      
    ...mapMutations(["but","del",]),
     but(path){
        this.$router.push({
           path:"/shop",
        })
        this.$store.state.show=true
       }
  },
  created() {},
  mounted() {
     this.$store.dispatch("Fnaxios");
     this.$store.dispatch("Fnaxios2");
  }
};
</script>
<style scoped>
.list {
  flex: 1;
  height: 100%;
  background: #ccc;
}
table {
  width: 100%;
  text-align: center;
}
img {
  width: 50px;
  height: 50px;
}
.img img {
  width: 100%;
  height: 100px;
}
.rm {
  width: 325px;
  float: right;
}
.cnav {
  width: 88px;
  height: 50px;
  background: #3388ff;
  float: left;
}
.cnav li{
      width: 88px;
      height: 25px;
      line-height: 25px;
      text-align: center;
}
.xq{
  width: 20px;
  height: 20px;
  background: red  ! important;
}
</style>
