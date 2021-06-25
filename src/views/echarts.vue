<template>
  <div>
    <v-echart :options="oooo" autoresize style='width:600px;height:200px;border:1px solid red;'></v-echart>
    <div style='width:600px;height:200px;border:1px solid red;' id="box1"></div>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  export default {
    data() {
      return {
        orthogon: [{
            name: '安级',
            value: 10,
            }, {
            name: '一级',
            value: 10,
            children: [{
                name: '规一级',
                value: 4,
            }, {
                name: '竣一级',
                value: 6,
            }]
            }, {
            name: '(一级)',
            value: 10,
            children: [{
                name: '人一级',
                value: 4,
            }, {
                name: '企*****',
                value: 2,
            }, {
                name: '统计*****',
                value: 4,
            }]
        }],
        oooo:{}
      }
    },
    methods: {
      box1() {
        var myChart = echarts.init(document.getElementById('box1'));
        var option = {
          series: [{
            type: 'treemap',
            data: this.orthogon
          }]
        }
        myChart.setOption(option);

        this.oooo=this.orthogon
      }
    },
    mounted() {
        this.box1();
    },
  }

</script>
