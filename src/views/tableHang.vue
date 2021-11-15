<template>
  <div>
    <el-button type="primary" @click="add()">新增</el-button>
    <el-table :data="tableData" style="width: 100%" :key="mainTableKey">
      <el-table-column fixed prop="date" label="日期" min-width="150">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.date" placeholder="请输入内容"></el-input>
          <span v-else>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" min-width="120">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.name" placeholder="请输入内容"></el-input>
          <span v-else>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="province" label="省份" min-width="120">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.province" placeholder="请输入内容"></el-input>
          <span v-else>{{scope.row.province}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="city" label="市区" min-width="120">
        <template slot-scope="scope">
          <span >{{scope.row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" min-width="300">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.address" placeholder="请输入内容"></el-input>
          <span v-else>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="zip" label="邮编" min-width="120">
        <template slot-scope="scope">
          <el-input v-if="scope.row.isEdit" v-model="scope.row.zip" placeholder="请输入内容"></el-input>
          <span v-else>{{scope.row.zip}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" v-if="!scope.row.isEdit" @click="edit(scope.row)">编辑</el-button>    
          <el-button type="text" size="small" v-if="scope.row.isEdit" @click="save(scope.row)">保存</el-button>
          <el-button type="text" size="small" v-if="scope.row.isEdit" @click="cancel(scope.row, scope.$index)">取消
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    data () {
        return {
            tableData: [],
            // table绑定key，更新key可以重新渲染table
            mainTableKey: 1
        }
    },
    mounted() {
        let da = [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
        // 给数据添加标志
        da.forEach(row => {
          // 是否标记
          row['isEdit'] = false
          // 是否新增
          row['isAdd'] = false
        })
        this.tableData = da
      },
      methods: {
        // 新增
        add() {
          this.tableData.push({
            date: '',
            name: '',
            province: '',
            city: '',
            address: '',
            zip: '',
            isEdit: true,
            isAdd: true
          })
        },
        // 编辑
        edit(row) {
          // 备份原始数据
          row['oldRow'] = JSON.parse(JSON.stringify(row))
          row.isEdit = true
          this.mainTableKey = Math.random()
        },
        // 取消
        cancel(row, index) {
          // 如果是新增的数据
          if (row.isAdd) {
            this.tableData.splice(index, 1)
          } else {
            // 不是新增的数据  还原数据
            for (const i in row.oldRow) {
              row[i] = row.oldRow[i]
            }
          }
          this.mainTableKey = Math.random()
        },
        // 保存
        save (row) {
          if (row.isAdd) {
            console.log('新增')
          } else {
			console.log('编辑')
		  }
        }
      }
}
</script>
