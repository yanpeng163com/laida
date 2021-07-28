<template>
  <div style='display: flex;'>
    <div style="height:calc(100vh - 50px);width:100%;" >
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>
   <!--<div style="height:calc(100vh - 50px);" :style="{width:(100-isWidth)+'%'}">
      <SeeksRelationGraph  :style="{width:isWidth+'%'}"
        ref="seeksRelationGraph1"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>-->
  </div>
    
     
</template>
<script>
 import SeeksRelationGraph from 'relation-graph'
 export default {
   name: 'Demo',
   components: { SeeksRelationGraph },
   data() {
     return {
      graphOptions: {
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
        allowSwitchLineShape: true,
        allowSwitchJunctionPoint: true,
        defaultLineShape: 1,
        'layouts': [
          {
            'label': '中心',
            'layoutName': 'center',
            'layoutClassName': 'seeks-layout-center'
          },

        ],
        defaultJunctionPoint: 'border'
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
     }
   },
   computed:{
     isWidth:function(){
       return 40
     }
   },
   mounted() {
     this.showSeeksGraph()
   },
   methods: {
     showSeeksGraph(query) {
        var _graphSetting = this.$refs.seeksRelationGraph.graphSetting
        const _center = {
            x: (_graphSetting.viewSize.width) / 2 - _graphSetting.canvasOffset.x,
            y: (_graphSetting.viewSize.height) / 2 - _graphSetting.canvasOffset.y
        }

        console.log(_center)
        
       var __graph_json_data = {
        rootId: '1',
        nodes: [
          { id: '1', name: '节点-1', myicon: 'el-icon-star-on' },
          { id: '2', name: '节点-2', myicon: 'el-icon-setting' },
          { id: '3', name: '节点-3', myicon: 'el-icon-setting' },
          { id: '4', name: '节点-4', myicon: 'el-icon-star-on' },
          { id: '6', name: '节点-6', myicon: 'el-icon-setting' },
          { id: '7', name: '节点-7', myicon: 'el-icon-setting' },
          // { id: '8', name: '节点-8', myicon: 'el-icon-star-on' },
          // { id: '9', name: '节点-9', myicon: 'el-icon-headset' },
          { id: '71', name: '节点-71', myicon: 'el-icon-headset' },
          { id: '72', name: '节点-72', myicon: 'el-icon-s-tools' },
          { id: '73', name: '节点-73', myicon: 'el-icon-star-on' },
          // { id: '81', name: '节点-81', myicon: 'el-icon-s-promotion' },
          // { id: '82', name: '节点-82', myicon: 'el-icon-s-promotion' },
          // { id: '83', name: '节点-83', myicon: 'el-icon-star-on' },
          // { id: '84', name: '节点-84', myicon: 'el-icon-s-promotion' },
          // { id: '85', name: '节点-85', myicon: 'el-icon-sunny' },
          // { id: '91', name: '节点-91', myicon: 'el-icon-sunny' },
          { id: '5', name: '节点-5', myicon: 'el-icon-sunny' },


        //   { id: '11', name: '节点-11', myicon: 'el-icon-sunny' },
          // { id: '12', name: '节点-12', myicon: 'el-icon-sunny' },
          // { id: '13', name: '节点-13', myicon: 'el-icon-sunny' },
          // { id: '14', name: '节点-14', myicon: 'el-icon-sunny' },
          // { id: '15', name: '节点-15', myicon: 'el-icon-sunny' },
          // { id: '110', name: '节点-110', myicon: 'el-icon-sunny' },
          // { id: '111', name: '节点-111', myicon: 'el-icon-sunny' },
          // { id: '112', name: '节点-112', myicon: 'el-icon-sunny' },
          // { id: '113', name: '节点-113', myicon: 'el-icon-sunny' },
          // { id: '114', name: '节点-114', myicon: 'el-icon-sunny' },

          // { id: '120', name: '节点-120', myicon: 'el-icon-sunny' },
          // { id: '121', name: '节点-121', myicon: 'el-icon-sunny' },
          // { id: '122', name: '节点-122', myicon: 'el-icon-sunny' },
          // { id: '123', name: '节点-123', myicon: 'el-icon-sunny' },
          // { id: '124', name: '节点-124', myicon: 'el-icon-sunny' },

          // { id: '140', name: '节点-140', myicon: 'el-icon-sunny' },
          // { id: '141', name: '节点-141', myicon: 'el-icon-sunny' },
          // { id: '142', name: '节点-142', myicon: 'el-icon-sunny' },
          // { id: '143', name: '节点-143', myicon: 'el-icon-sunny' },
          // { id: '144', name: '节点-144', myicon: 'el-icon-sunny' },
        ],
        links: [
          { from: '7', to: '71', text: '投资' },
          { from: '7', to: '72', text: '投资' },
          { from: '7', to: '73', text: '投资' },
          // { from: '8', to: '81', text: '投资' },
          // { from: '8', to: '82', text: '投资' },
          // { from: '8', to: '83', text: '投资' },
          // { from: '8', to: '84', text: '投资' },
          // { from: '8', to: '85', text: '投资' },
          // { from: '9', to: '91', text: '投资' },
          { from: '1', to: '2', text: '投资' },

          { from: '3', to: '1', text: '高管' },
          { from: '4', to: '2', text: '高管' },
          { from: '6', to: '2', text: '高管' },
          { from: '7', to: '2', text: '高管' },
          // { from: '8', to: '2', text: '高管' },
          // { from: '9', to: '2', text: '高管' },
          { from: '1', to: '5', text: '投资' },
          { from: '1', to: '11', text: 'asd' },
          // { from: '11', to: '110', text: '投资' },
          // { from: '11', to: '111', text: '投资' },

          // { from: '11', to: '112', text: '投资' },
          // { from: '11', to: '113', text: '投资' },
          // { from: '11', to: '114', text: '投资' },
          // { from: '12', to: '120', text: '投资' },
          // { from: '12', to: '121', text: '投资' },
          // { from: '12', to: '122', text: '投资' },
          // { from: '12', to: '123', text: '投资' },
          // { from: '12', to: '124', text: '投资' },

          // { from: '14', to: '140', text: '投资' },
          // { from: '14', to: '141', text: '投资' },
          // { from: '14', to: '142', text: '投资' },
          // { from: '14', to: '143', text: '投资' },
          // { from: '14', to: '144', text: '投资' },

          { from: '11', to: '12', text: '投资' },
          { from: '11', to: '13', text: '投资' },
          { from: '11', to: '14', text: '投资' },
          { from: '11', to: '15', text: '投资' },

        ]
      }

      var x1={ id: '11', name: '节点-11', myicon: 'el-icon-sunny' ,x:_center.x,y:_center.y}
        // x1.x=_center.x-300
        // x1.y=_center.y-200
        __graph_json_data.nodes.push(x1)
       // 以上数据中的node和link可以参考"Node节点"和"Link关系"中的参数进行配置 
       this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
         // Called when the relation-graph is completed 
       })
      //  this.$refs.seeksRelationGraph1.setJsonData(__graph_json_data, (seeksRGGraph) => {
      //    // Called when the relation-graph is completed 
      //  })
     },
     onNodeClick(nodeObject, $event) {
       console.log('onNodeClick:', nodeObject)
     },
     onLineClick(lineObject, $event) {
       console.log('onLineClick:', lineObject)
     }
   }
 }
 </script>