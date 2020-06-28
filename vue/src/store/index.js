import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import VuexPersist from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersist({
  storage: window.localStorage //可选，sessionStorage/indexDB
});

const store = new Vuex.Store({
  state:{
      isLoading:true,
      shoplist:[],
      list:[],
      show: false,
      bq:["热卖","折扣"],
      active:0
  },
  mutations:{
        Fnlist(state,data){
           state.shoplist=data
          
        },
        Fnlist2(state,data){
          state.shoplist2=data
         
       },
        but(state,obj){
        let indexs=state.list.find((item)=>{
              return item.id==obj.id
          })
          if(indexs){
             indexs.number++
          }else{
            state.list.push(obj)
          }
          state.show=true
        },
        checkeds(state,index){
          state.list[index].checked=!state.list[index].checked
        },
        checks(state){
          for(let i=0;i<state.list.length;i++){
               state.list[i].checked=!state.list[i].checked
          }
        },
        removes(state){
        
          for(let i=0;i<state.list.length;i++){
             if(state.list[i].checked){
                 state.list.splice(i,1)
                 i--
             }
          }
        },
        remove(state){
            
            if(confirm("确认清空吗?")==true){
           state.list.splice(0,state.list.length)
            }
        },
        deles(state,index){
            state.list.splice(index,1)
        },
        jia(state,index){
          state.show=true
            state.list[index].number++
        },
        jian(state,index){
          state.show=true
            if(state.list[index].number>=1){
               state.list[index].number--
            }else if(confirm("确认删除?"+state.list[index].name)==true){
                  state.list.splice(index,1)
            }
        },
        js(state){
          state.show=!state.show
        },
        del(state,index){
             state.active=index
        },
       
  },
  actions:{
        Fnaxios(context){
           axios.get("/static/list.json").then((res)=>{
               console.log(res)
               context.commit("Fnlist",res.data)
           })
        },
        Fnaxios2(context){
          axios.get("/static/list2.json").then((res)=>{
              console.log(res)
              context.commit("Fnlist2",res.data)
          })
       },
  },
  getters:{
      js(state){
        let num=0
        state.list.forEach((item)=>{
            if(item.checked){
             num+= Number(item.number*item.price)
            }
        })
        return num
      },
      jss(state){
         let num=0
         state.list.forEach((item)=>{
            if(item.checked){
              num++
            }
         })
         return num
      }

  },
  
  plugins: [vuexLocal.plugin]
});

export default store



