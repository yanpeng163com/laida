<template>
  <div>
    <el-cascader :options="options" :props="props" v-model="value1"></el-cascader>
    <el-button @click="open">123</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        props: {
          multiple: true,
          value: 'id',
          label: 'name',
          children: 'sub'
        },
        value1: [[1, 4],[1,8]],
        options: [{
                "id": 1,
                "name": "水果",
                "level": "1",
                "pid": "0",
                "status": "1",
                "sub": [{
                    "id": 4,
                    "name": "苹果",
                    "level": "2",
                    "pid": "1",
                    "status": "1"
                }, {
                    "id": 8,
                    "name": "香蕉",
                    "level": "2",
                    "pid": "1",
                    "status": "1"
                }]
            }, {
                "id": 2,
                "name": "食品",
                "level": "1",
                "pid": "0",
                "status": "1",
                "sub": [{
                    "id": 5,
                    "name": "馒头",
                    "level": "2",
                    "pid": "2",
                    "status": "1"
                }, {
                    "id": 6,
                    "name": "大米",
                    "level": "2",
                    "pid": "2",
                    "status": "1"
                }]
            }]
    // options: [{
    //   value: 1,
    //   label: '东南',
    //   children: [{
    //     value: 2,
    //     label: '上海',
    //     children: [
    //       { value: 3, label: '普陀' },
    //       { value: 4, label: '黄埔' },
    //       { value: 5, label: '徐汇' }
    //     ]
    //   }, {
    //     value: 7,
    //     label: '江苏',
    //     children: [
    //       { value: 8, label: '南京' },
    //       { value: 9, label: '苏州' },
    //       { value: 10, label: '无锡' }
    //     ]
    //   }, {
    //     value: 12,
    //     label: '浙江',
    //     children: [
    //       { value: 13, label: '杭州' },
    //       { value: 14, label: '宁波' },
    //       { value: 15, label: '嘉兴' }
    //     ]
    //   }]
    // }, {
    //   value: 17,
    //   label: '西北',
    //   children: [{
    //     value: 18,
    //     label: '陕西',
    //     children: [
    //       { value: 19, label: '西安' },
    //       { value: 20, label: '延安' }
    //     ]
    //   }, {
    //     value: 21,
    //     label: '新疆维吾尔族自治区',
    //     children: [
    //       { value: 22, label: '乌鲁木齐' },
    //       { value: 23, label: '克拉玛依' }
    //     ]
    //   }]
    // }]
  }
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    open() {
      console.log(this.value1)
    }
  }
  }

</script>
