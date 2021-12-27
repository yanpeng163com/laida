<template>
  <div style='display: flex;'>

    <div style="height:calc(100vh - 300px);width:100%;">
      <button @click="layout()">123</button>
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick"
        :on-line-click="onLineClick">
        <div slot="node" slot-scope="{node}" style='width:100%;height:100%;'>
          <div class='c-my-node'
            style="height:100px;line-height: 26px;cursor: pointer;white-space: nowrap; overflow:hidden;text-overflow: ellipsis;text-align:left;"
            v-if="node.data.islabel">
            <el-tooltip class="item " effect="light" :content="node.data.tableNameCn" placement="top-start">
              <span :title="node.text">
                中文名:{{ node.data.tableNameCn }}
              </span>
            </el-tooltip><br />
            <el-tooltip class="item " effect="light" :content="node.data.tableNameEn" placement="top-start">
              <span>
                英文名:{{ node.data.tableNameEn }}
              </span>
            </el-tooltip><br />
            <el-tooltip class="item " effect="light" :content="node.data.description" placement="top-start">
              <span>
                描述:{{ node.data.description }}
              </span>
            </el-tooltip>

          </div>
          <div class='c-my-node' style="height:100%;line-height: 26px;border-radius: 32px;cursor: pointer;white-space: nowrap; text-overflow: ellipsis;display:flex;justify-content: center;
    align-items: center;" v-else>
            <span :title="node.text">
              {{ node.text }}
            </span><br />
          </div>
        </div>
      </SeeksRelationGraph>
    </div>
  </div>


</template>
<script>
  import SeeksRelationGraph from 'relation-graph'
  export default {
    name: 'Demo',
    components: {
      SeeksRelationGraph
    },
    data() {
      return {
        graphOptions: {
          defaultNodeBorderWidth: 0,
          defaultNodeColor: 'rgba(238, 178, 94, 1)',
          allowSwitchLineShape: true,
          allowSwitchJunctionPoint: true,
          defaultLineShape: 1,
          defaultJunctionPoint: 'border',
          'layouts': [
            {
              'label': '自动布局',
              'layoutName': 'force',
              'layoutClassName': 'seeks-layout-force'
            },
            {
              'label': '中心',
              'layoutName': 'center',
              'layoutClassName': 'seeks-layout-center',
              "distance_coefficient": 1
            },
            // {
            //   'label': '树',
            //   'layoutName': 'tree',
            //   'layoutClassName': 'seeks-layout-center',
            //   'defaultNodeShape': 0,
            //   'defaultLineShape': 1,
            //   'from': 'left',
            //   // 通过这4个属性来调整 tree-层级距离&节点距离
            //   'min_per_width': undefined,
            //   'max_per_width': '400',
            //   'min_per_height': '150',
            //   'max_per_height': undefined,
            //   'levelDistance': '' // 如果此选项有值，则优先级高于上面那4个选项
            // },
            // {
            //   'label': '数树',
            //   'layoutName': 'tree',
            //   'layoutClassName': 'seeks-layout-center',
            //   'defaultJunctionPoint': 'border',
            //   'defaultNodeShape': 0,
            //   'defaultLineShape': 1,
            //   'min_per_width': 500,
            //   'max_per_width': 600,
            //   'min_per_height': 100
            // }

          ],

          // 这里可以参考"Graph 图谱"中的参数进行设置
        },
        relationData:''
      }
    },
    computed: {
      isWidth: function () {
        return 40
      }
    },
    mounted() {
      this.showSeeksGraph()
    },
    methods: {
      layout() {
        //.GraphSettingPanel()
        console.log(this.$refs.seeksRelationGraph.refresh())
        console.log(this.relationData)
        // this.$refs.seeksRelationGraph.setJsonData(this.relationData, (seeksRGGraph) => {})

		//   this.$refs.seeksRelationGraph.focusNodeById('2_e91dfc1a04ba4f3fafbf468311d6df6f')
		  // this.$refs.seeksRelationGraph.focusRootNode()
      },
      showSeeksGraph(query) {
        var _graphSetting = this.$refs.seeksRelationGraph.graphSetting

        var data = {
	"code": 200,
	"data": {
		"node": [{
			"description": "福利费用计划",
			"id": "2_8ef40860e9b54e5082a71980fc8d03a2",
			"namespace": "PRJ_QH_APP_SZHSJ2_PRD",
			"tableNameCn": "福利费用计划",
			"tableNameEn": "QRYH_W_FL_FLCOSTPLAN_INFO",
			"type": 4
		}, {
			"description": "",
			"id": "2_ffbb0c1bfc3746edb1785d600f2ae9e9",
			"namespace": "PRJ_QH_APP_SZHSJ2_DEV",
			"tableNameCn": "",
			"tableNameEn": "PA_DIM_VALUE",
			"type": 4
		}, {
			"description": "福利计划限额管理",
			"id": "2_3b113222792a480cba498141294277e6",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "福利计划限额管理",
			"tableNameEn": "STD_HRCS_SGP_SGP_SAPSR3_Z00HRTFLJHXEGL",
			"type": 3
		}, {
			"description": "福利计划限额管理",
			"id": "2_124e079b6c5f491eb9f914d9abe940d6",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "福利计划限额管理",
			"tableNameEn": "DIS_UEP_HRCS_SGP_SGP_SAPSR3_Z00HRTFLJHXEGL",
			"type": 2
		}],
		"relationship": [{
			"endNodeId": "2_8ef40860e9b54e5082a71980fc8d03a2",
			"startNodeId": "2_ffbb0c1bfc3746edb1785d600f2ae9e9"
		}, {
			"endNodeId": "2_8ef40860e9b54e5082a71980fc8d03a2",
			"startNodeId": "2_3b113222792a480cba498141294277e6"
		}, {
			"endNodeId": "2_3b113222792a480cba498141294277e6",
			"startNodeId": "2_124e079b6c5f491eb9f914d9abe940d6"
		}]
	},
	"msg": "OK",
	"resultCode": "",
	"success": true
        }
        var __graph_json_data = {
          rootId: 'a',
          nodes: [{
              id: 'a',
              text: '数据',
              borderColor: 'yellow',
              width:'120',
              height:'120'
            },
            {
              id: 'b',
              text: '贴源层',
              borderColor: 'yellow',
              width:'120',
              height:'120'
            },
            {
              id: 'c',
              text: '共享层',
              borderColor: 'yellow',
              width:'120',
              height:'120'
            },
            {
              id: 'd',
              text: '分析层',
              borderColor: 'yellow',
              width:'120',
              height:'120'
            }
          ],
          links: [{
              "from": "a",
              "to": "b"
            },
            {
              "from": "a",
              "to": "c"
            },
            {
              "from": "a",
              "to": "d"
            },
          ]
        }
        data.data.node.forEach(v => {
          __graph_json_data.nodes.push({
                "id": v.id,
                "type": v.type,
                "nodeShape":1,
                // width:'400',  
                height:'120',
                "color":v.type==4?'blue':v.type==3?'pink':v.type==2?'green':'',
                "data":{
                  "description": v.description,
                  "id": v.id,
                  "namespace": v.namespace,
                  "tableNameCn": v.tableNameCn,
                  "tableNameEn": v.tableNameEn,
                  "islabel": true,
                  
                }
              })
              if (v.type == 4) {
                __graph_json_data.links.push({
                  "from": 'd',
                  "to": v.id
                })
              } else if (v.type == 3) {
                __graph_json_data.links.push({
                  "from": 'c',
                  "to": v.id
                })
              } else if (v.type == 2) {
                __graph_json_data.links.push({
                  "from": 'b',
                  "to": v.id
                })
              }
        })
        // console.log(data)

        // __graph_json_data.links.push(data.data.node)
        console.log(__graph_json_data)
        this.relationData=__graph_json_data
        this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
          // Called when the relation-graph is completed 
          this.$refs.seeksRelationGraph.zoom(-50)
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
<style scoped>
  .rel-node-peel {
    font-size: 12px;
  }

</style>
