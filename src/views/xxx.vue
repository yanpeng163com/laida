<template>
  <div>
    <el-button>默认按钮</el-button>
    <div style='width:500px;background:red'>
      <el-table :data="tableData" style="width: 100%"  :row-class-name="tableRowClassName" :header-cell-style="{background:'transparent',color:'#3cf'}" :show-header="false">
        <el-table-column prop="date" label="日期" width="180" :render-header='renderHeader'>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]

      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex%2==0) {
          return 'warning-row';
        } 
        return '';
      },
      renderHeader(h,{column,$index}){
        return h('div',{style:{color:'#3cf'}},column.label);
      }
    },
    mounted() {

    },

  }

</script>
<style lang="">
  li {
    margin-top: 20px
  }

  input {
    background: red
  }
  .el-table .warning-row {
    background: #0A1F4C;
  }

  .el-table .success-row {
   /* background: #0A1F4C;*/
  }
</style>
<style>
  

</style>
