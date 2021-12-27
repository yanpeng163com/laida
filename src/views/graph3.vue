<template>
  <div >
    <div style="height:50px;padding-top:6px;padding-left: 30px;padding-right:30px;border-bottom: #efefef solid 1px;">
      <el-button :disabled="level2DataIsloaded" type="success" @click="loadNextLevel2Data">加载第2层数据</el-button>
      <el-button  type="success" @click="loadNextLevel3Data">加载第3层数据</el-button>
      <el-button type="success" class="c-show-code-button"><el-link href="https://github.com/seeksdream/relation-graph/blob/master/doc/demo/Demo4AdvDynamicData.vue" target="_blank" style="color: #ffffff;">查看代码</el-link></el-button>
    </div>
    <div style="height:calc(100vh - 50px);">
      <SeeksRelationGraph
        ref="seeksRelationGraph"
        :options="graphOptions"
        :on-node-click="onNodeClick"
        :on-line-click="onLineClick"
      />
    </div>
  </div>
</template>

<script>
import SeeksRelationGraph from 'relation-graph'
export default {
  name: 'Demo',
  components: { SeeksRelationGraph },
  data() {
    return {
      level2DataIsloaded: false,
      level3DataIsloaded: false,
      isShowCodePanel: false,
      graphOptions: {
        backgrounImage:require('@/assets/bg_2.jpg'),
        defaultNodeBorderWidth: 0,
          allowShowMiniToolBar: true,
          allowSwitchLineShape: false,
          allowSwitchJunctionPoint: false,
          isMoveByParentNode: true,
          defaultLineShape: 1.5,
          'layouts': [{
              'label': '中心',
              'layoutName': 'center',
              'layoutClassName': 'seeks-layout-center',
              useLayoutStyleOptions: true,
              'defaultNodeWidth': '50',
              'defaultNodeHeight': '50',
              defaultNodeBorderWidth: 0,
              defaultLineShape: 1,
              distance_coefficient: 1
            },
          ],
          defaultJunctionPoint: 'lr'
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  mounted() {
    this.showSeeksGraph()
    this.loadNextLevel2Data()
  },
  methods: {
    showSeeksGraph(query) {
      var __graph_json_data = {
        rootId: '2',
        nodes: [
          { id: '1', name: '节点-1', myicon: 'el-icon-star-on' },
          { id: '2', name: '节点-2', myicon: 'el-icon-setting' },
          { id: '4', name: '节点-4', myicon: 'el-icon-star-on' },
          { id: '6', name: '节点-6', myicon: 'el-icon-setting' },
          { id: '7', name: '节点-7', myicon: 'el-icon-setting' },
          { id: '8', name: '节点-8', myicon: 'el-icon-star-on' },
          { id: '9', name: '节点-9', myicon: 'el-icon-headset' },
          { id: '51', name: '节点-51', myicon: 'el-icon-sunny' },
          { id: '52', name: '节点-52', myicon: 'el-icon-sunny' },
          { id: '53', name: '节点-53', myicon: 'el-icon-sunny' },
          { id: '54', name: '节点-54', myicon: 'el-icon-sunny' },
          { id: '55', name: '节点-55', myicon: 'el-icon-sunny' },{ id: '3', name: '节点-3', myicon: 'el-icon-setting' },
          { id: '71', name: '节点-71', myicon: 'el-icon-headset' },
          { id: '72', name: '节点-72', myicon: 'el-icon-s-tools' },
          { id: '73', name: '节点-73', myicon: 'el-icon-star-on' },
          { id: '81', name: '节点-81', myicon: 'el-icon-s-promotion' },
          { id: '82', name: '节点-82', myicon: 'el-icon-s-promotion' },
          { id: '83', name: '节点-83', myicon: 'el-icon-star-on' },
          { id: '84', name: '节点-84', myicon: 'el-icon-s-promotion' },
          { id: '85', name: '节点-85', myicon: 'el-icon-sunny' },
          { id: '91', name: '节点-91', myicon: 'el-icon-sunny' },
          { id: '92', name: '节点-82', myicon: 'el-icon-sunny' },
          { id: '5', name: '节点-5', myicon: 'el-icon-sunny' },
          { id : '101', name:'节点-101', myicon: 'el-icon-sunny'},
          { id : '102', name:'节点-102', myicon: 'el-icon-sunny'},
          { id : '103', name:'节点-103', myicon: 'el-icon-sunny'},
          { id : '104', name:'节点-104', myicon: 'el-icon-sunny'},
          { id : '105', name:'节点-105', myicon: 'el-icon-sunny'},
          { id : '106', name:'节点-106', myicon: 'el-icon-sunny'},
          { id : '107', name:'节点-107', myicon: 'el-icon-sunny'},
          { id : '108', name:'节点-108', myicon: 'el-icon-sunny'},
          { id : '109', name:'节点-109', myicon: 'el-icon-sunny'},
          { id : '110', name:'节点-110', myicon: 'el-icon-sunny'},
          { id : '111', name:'节点-111', myicon: 'el-icon-sunny'},
          { id : '112', name:'节点-112', myicon: 'el-icon-sunny'},
          { id : '113', name:'节点-113', myicon: 'el-icon-sunny'},
          { id : '114', name:'节点-114', myicon: 'el-icon-sunny'},
          { id : '115', name:'节点-115', myicon: 'el-icon-sunny'},
          { id : '116', name:'节点-116', myicon: 'el-icon-sunny'},
          { id : '117', name:'节点-117', myicon: 'el-icon-sunny'},
          { id : '118', name:'节点-118', myicon: 'el-icon-sunny'},
          { id : '119', name:'节点-119', myicon: 'el-icon-sunny'},
          { id : '120', name:'节点-120', myicon: 'el-icon-sunny'},

        ],
        links: [
          { from: '1', to: '2', text: '投资' },
          { from: '4', to: '2', text: '高管' },
          { from: '6', to: '2', text: '高管' },
          { from: '7', to: '2', text: '高管' },
          { from: '8', to: '2', text: '高管' },
          { from: '9', to: '2', text: '高管' }
        ]
      }
      this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })

      console.log(this.$refs.seeksRelationGraph)
    },
    loadNextLevel2Data() {
      this.level2DataIsloaded = true
      var __graph_json_data = {
        rootId: '2',
        nodes: [
          
        ],
        links: [
          { from: '7', to: '71', text: '投资' },
          { from: '7', to: '72', text: '投资' },
          { from: '7', to: '73', text: '投资' },
          { from: '8', to: '81', text: '投资' },
          { from: '8', to: '82', text: '投资' },
          { from: '8', to: '83', text: '投资' },
          { from: '8', to: '84', text: '投资' },
          { from: '8', to: '85', text: '投资' },
          { from: '8', to: '101', text: '投资' },
          { from: '8', to: '102', text: '投资' },
          { from: '8', to: '103', text: '投资' },
          { from: '8', to: '104', text: '投资' },
          { from: '8', to: '105', text: '投资' },
          { from: '8', to: '106', text: '投资' },
          { from: '8', to: '107', text: '投资' },
          { from: '8', to: '108', text: '投资' },
          { from: '8', to: '109', text: '投资' },
          { from: '8', to: '110', text: '投资' },
          { from: '8', to: '111', text: '投资' },
          { from: '8', to: '112', text: '投资' },
          { from: '8', to: '113', text: '投资' },
          { from: '8', to: '114', text: '投资' },
          { from: '8', to: '115', text: '投资' },
          { from: '8', to: '116', text: '投资' },
          { from: '8', to: '117', text: '投资' },
          { from: '8', to: '118', text: '投资' },
          { from: '8', to: '119', text: '投资' },
          { from: '8', to: '120', text: '投资' },
          { from: '9', to: '91', text: '投资' },
          { from: '9', to: '92', text: '投资' },
          { from: '3', to: '1', text: '高管' },
          { from: '1', to: '5', text: '投资' }
        ]
      }
      this.$refs.seeksRelationGraph.appendJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
    },
    loadNextLevel3Data() {
      this.level3DataIsloaded = true
      var __graph_json_data = {
        rootId: '2',
        nodes: [
          
        ],
        links: [
          { from: '5', to: '51', text: '投资1' },
          { from: '5', to: '52', text: '投资' },
          { from: '5', to: '53', text: '投资3' },
          { from: '5', to: '54', text: '投资4' },
          { from: '5', to: '55', text: '投资' }
        ]
      }
      this.$refs.seeksRelationGraph.appendJsonData(__graph_json_data, (seeksRGGraph) => {
        // 这些写上当图谱初始化完成后需要执行的代码
      })
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
