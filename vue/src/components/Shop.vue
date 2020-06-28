<template>
  <div class="shop">
       <div class="img">
           <img src="../assets/微信图片_20200529005232.png" alt="">
       </div>
      <table>
           <!-- <thead>
               <tr>
               <th>选择</th>
               <th>商品图</th>
               <th>商品名</th>
               <th>价格</th>
               <th>数量</th>
               <th>小计</th>
               <th>操作</th>
           </tr>
           </thead> -->
           <tbody>
               <tr v-for="(item,index) in list" :key="index">
                   <td>
                      <input type="checkbox" v-model="item.checked" @click="checkeds(index)">
                   </td>
                   <td>
                       <img :src="item.img" alt="">
                   </td>
                    <td>
                       {{item.name}}
                   </td>
                   <td>
                       {{item.price|toFixed(2)}}
                   </td>
                   <td>
                        <input type="button" value="减" @click="jian(index)">
                        <input type="text" v-model="item.number">
                        <input type="button" value="加" @click="jia(index)">
                   </td>
                   <td>
                       <th>{{item.price*item.number|toFixed(2)}}</th>
                   </td>
                   <td>
                       <button @click="deles(index)" >删除</button>
                   </td>
                  
               </tr>
           </tbody>
           <tfoot>
               <tr>
                   <th>
                  <input type="checkbox" v-model="Allcheck" @click="checks">
                   </th>
                   <th>
                     
                       全选
                   </th>
                   <th>
                      <span> 清空购物车</span>
                   </th>
                   <th>
                       <button @click="remove">确认</button>
                   </th>
                   <th>
                      <button @click="removes">选中删除</button>
                   </th>
                   <th>
                       {{$store.getters.js|toFixed(2)}}
                   </th>
                   <th> 总价</th>
               </tr>
           </tfoot>
       </table>
       <mota></mota>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters}from'vuex'
import mota  from'../components/Mota'
export default {
  components: {
      mota,
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {
      ...mapState(["list"]),
      ...mapGetters(["js"]),
      Allcheck:{
              get(){
                  return this.$store.state.list.every((item)=>{
                       return item.checked
                  })
              },
              set(val){
                  return this.$store.state.list.forEach((item)=>{
                      return item.checked=val
                  })
              }
      },
      
  },
  methods: {
          checkeds(index){
              this.$store.commit("checkeds",index)
          },
          checks(){
              this.$store.commit("checks")
          },
          removes(){
                alert(111)
              this.$store.commit("removes")
          },
          remove(){
              this.$store.commit("remove")
          },
          deles(index){
              this.$store.commit("deles",index)
          },
          jia(index){
               this.$store.commit("jia",index)
          },
            jian(index){
               this.$store.commit("jian",index)
          }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.shop{
    flex: 1;
    height: 100%;
    font-size: 14px;
}
table{
    width: 100%;
    text-align: center;
}
img{
    width: 50px;
    height: 50px;
}
input[type="text"]{
    width: 20px;
    text-align: center;
}
.img img{
    width: 100%;
    height: 200px;
}
</style>