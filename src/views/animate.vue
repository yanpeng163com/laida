<template>
     <el-scrollbar style='height:100%;'>
       <div v-for="item in 5" :key="item" style='width:100px;height:100px;background:red;'>
         {{item}}
       </div>
     </el-scrollbar>
</template>
<script>
  import axios from 'axios'
  import request from '@/utils/request'
  import {
    all
  } from "@/api/dataC/dataC.js";
  export default {
    data() {
      return {
        leftMenuTop2: [{
                name: '存储总量',
                num: '8'
              },
              {
                name: '表总量',
                num: '1000'
              },

              {
                name: '半结构化',
                num: '20202'
              },
              {
                name: '结构化数据',
                num: '345'
              },
              {
                name: '非结构化',
                num: '234234'
              },
              {
                name: '外部类目数',
                num: '234234'
              },
            ],
      }
    },
    methods: {
      home() {
        // axios.get('http://161.189.173.220:5000/api/Platform/Alarms/GetStatisticsByLevel',{
        //     headers:{
        //         "Authorization":'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYSI6InN1cGVyYWRtaW4iLCJubiI6Iui2hee6p-euoeeQhuWRmCIsInRlbmFudGlkIjoiMCIsInJlIjoiMTYyOTk3NDYyNyIsIm5iZiI6MTYyOTg4MTAyNywiZXhwIjoxNjI5ODg4MjI3LCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAifQ.h-raGd9WZTYddKcUgn-2YqMsO5aflNOCOWtchH4IqWw'
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })
        // axios.get('/dataserver/api/v1/statistics/all').then(res=>{
        //     console.log(res)
        // })
        all.then(res => {
          console.log(res)
        })
        // request({
        //     url:'/dataserver/api/v1/statistics/all',
        // }).then(res=>{
        //     console.log(res)
        // })
        axios.get('peng', {
          headers: {
            "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYSI6InN1cGVyYWRtaW4iLCJubiI6Iui2hee6p-euoeeQhuWRmCIsInRlbmFudGlkIjoiMCIsInJlIjoiMTYyOTk3NDYyNyIsIm5iZiI6MTYyOTg4MTAyNywiZXhwIjoxNjI5ODg4MjI3LCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAiLCJhdWQiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAifQ.h-raGd9WZTYddKcUgn-2YqMsO5aflNOCOWtchH4IqWw'
          }
        }).then(res => {
          console.log(res)
        })
      }
    },
    mounted() {
      // this.home();
    }
  }

</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
