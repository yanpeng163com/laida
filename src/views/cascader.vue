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

