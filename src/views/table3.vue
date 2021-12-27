<template>
  <el-table
    :data="tableData"
    style="width: 40%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="日期日期日期日期日期日期日期"
      sortable
      :show-overflow-tooltip="true"
      :render-header="labelHead"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      :render-header="labelHead"
     >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter"
      :render-header="labelHead" >
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      labelHead(h,{column,index}){
          let l = column.label.length
          let f = 14 //每个字大小，其实是每个字的比例值，大概会比字体大小差不多大一点，
          column.minWidth = f*l //字大小乘个数即
        return h('div',{class:'table-head',style:{width:'100%',whiteSpace: 'nowrap'}},[column.label])
       }, 
    }
  }
</script>
<style >
 .table-head{
    font-size:14px!important;
  }
  .el-table .cell{
    position:relative;
  }
  .el-table .caret-wrapper{
    position:absolute;
    top:2px;
    right:0;
  }
   .el-table .cell, .el-table th div{
    padding:0!important;
  }
  .el-table tr td .cell{
    padding:5px 2px !important;
  }
  .el-table .cell, .el-table th div, .el-table--border td:first-child .cell, .el-table--border th:first-child .cell{
    padding-left:0 !important;
  }
</style>