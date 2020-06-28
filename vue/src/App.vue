<template>
  <div id="app">
    
    <router-view/>
    <ul class="ul" v-drag>
      <li @click="del(index,item.path)" v-for="(item,index) in arr" :key="index" :style="{background:active==index?'tomato':'#3388ff'}">
        {{item.name}}
      </li>
    </ul>
     <p    @click="js"><span>结算</span> <span>{{$store.getters.jss}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      active:0,
        arr:[
           {
            name:"商品列表",
            path:"/list"
          },
          {
            name:"结算列表",
            path:"/shop"

          },
         
        ]
    }
  },
  methods:{
    del(index,res){
       this.active=index
       this.$router.push({
          path:res
       })
    },
    js(){
      this.$store.commit("js")
    }
  }
}
</script>

<style>
.ul{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  z-index: 8888;
  background:#3388ff;
}
.ul li{
  flex: 1;
 
}
p{
    position: absolute;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 5%;
    right: 42.5%;
    bottom: 10px;
    color: #fff;
    background: red;
    z-index: 9999;
   
}
</style>
