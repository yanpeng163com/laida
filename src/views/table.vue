<template>
  <div>
    <div id="waterMack">
      <el-table style="margin-top: 50px;" :data='list' v-waterMarker="{
            text: ['A-B-C-D-F-G','2021-09-08','12:00:00'],
            font:'10px Microsoft JhengHei',
            textColor: 'rgba(180, 180, 180, 0.4)'
        }">
        <el-table-column align="center" v-for="(item,index) in list" :key="index">
          <template slot-scope="scope">
            {{scope.row[index]}}
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot-scope="scope">
            {{scope.row[0]}}
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot-scope="scope">
            {{scope.row[1]}}
          </template>
        </el-table-column>
      </el-table>

      <el-table :data="dataList">
        <el-table-column v-for="(it,index) in dataCou" :prop="it.fieldEn" :label="it.fieldCN" :key="index">

        </el-table-column>
        <!-- <el-table-column label="审批类型" prop="type" align="center">
          <template slot-scope="{ row }">
            <span>{{ row.type==1?'技术审批':row.type==2?'商务审批':row.type==3?'实施审批':row.type==4?'采购':''}}</span>
          </template>
        </el-table-column>
        <el-table-column  label="评审人" prop="" align="center" >
          <el-table-column label="" >
            <template slot-scope="{ row }">
              {{row.user1}}
            </template>
          </el-table-column> -->
           <!-- <el-table-column label="第一评审人" prop="" align="center">
            <template slot-scope="{ row }">
              {{row.user[0].userName}}
            </template>
          </el-table-column>
          <el-table-column label="第二评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[1]?row.user[1].userName:''}}
            </template>
          </el-table-column>
         <el-table-column label="第三评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[2]?row.user[2].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第4评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[3]?row.user[3].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第5评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[4]?row.user[4].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第6评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[5]?row.user[5].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第7评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[6]?row.user[6].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第8评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[7]?row.user[7].userName:''}}
            </template>
          </el-table-column>
          <el-table-column label="第9评审人" prop="type" align="center">
            <template slot-scope="{ row }">
              {{row.user[8]?row.user[8].userName:''}}
            </template>
          </el-table-column> 
        </el-table-column>-->
      </el-table>
    </div>
    
  </div>

</template>
<script>
  import {
    removeWatermark,
    setWaterMark
  } from '@/utils/watermark'
  export default {
    data() {
      return {
        originData: [{
            type: '选择题',
            num: '5题',
            average: '3分/题',
          },
          {
            type: '填空题',
            num: '5题',
            average: '3分/题',
          },
          {
            type: '选择题',
            num: '2题',
            average: '10分/题',
          }
        ],
        dataCou : [
          {
            "fieldEn":'type',
            "fieldCN": "类型",
          },
          {
            "fieldEn":'userName1',
            "fieldCN": "第一审核人",
          },
          {
            "fieldEn":'userName2',
            "fieldCN": "第二审核人",
          },
          {
            "fieldEn":'userName3',
            "fieldCN": "第三审核人",
          },
          
        ],
        dataList:[
          {"type":"技术评审","userName1":"陈彦鹏1","userName2":"陈彦鹏2","userName3":"陈彦鹏3"},
          {"type":"技术评审","userName1":"陈彦鹏1","userName2":"陈彦鹏2","userName3":"陈彦鹏3"},
        ],

        originTitle: ['题型'], // originTitle 该标题为 正常显示的标题, 数组中的顺序就是上面数据源对象中的字段标题对应的顺序
        transTitle: ['学生1', '学生2', '学生3'], // transTitle 该标题为转化后的标题, 注意多一列,  因为原来的标题变成了竖着显示了, 所以多一列标题, 第一个为空即可
        transData: [],
        list: [
          ['调用地址', '123'],
          ['app Key', '123'],
          ['app secret', '123'],
        ],
        title: ['调用地址', 'app Key', 'app secret'],
        
      }
    },
    mounted() {
      console.log(this.dataList)

    },
    created() {
      let matrixData = this.originData.map((row) => {
        let arr = []
        for (let key in row) {
          arr.push(row[key])
        }
        return arr
      })
      console.log(matrixData)
      // 加入标题拼接最终的数据
      this.transData = matrixData[0].map((col, i) => {
        return [this.transTitle[i], ...matrixData.map((row) => {
          return row[i]
        })]
      })
      
      
      var str=[];
      var str1=[]
      
     
      console.log(this.dataList)
      // setWaterMark('liergou', '李二狗','123');
    },
   
  }

</script>
<style scoped>
  /deep/.el-table th,
  /deep/.el-table tr {
    background: transparent;
  }

</style>
<style >
    /* .my-autocomplete {
        li {
            line-height: normal;
            padding: 7px;

            .name {
            text-overflow: ellipsis;
            overflow: hidden;
            }
            .addr {
            font-size: 12px;
            color: #b4b4b4;
            }

            .highlighted .addr {
            color: #ddd;
            }
        }
        } */
</style>
