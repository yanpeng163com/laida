<template>
  <div style='display: flex;'>
    <div style="height:calc(100vh - 50px);width:100%;">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick"
        :on-line-click="onLineClick" >
          <div slot="node" slot-scope="{node}" style='width:100%;height:100%;'>
              <div class='c-my-node' style="height:100px;line-height: 26px;cursor: pointer;white-space: nowrap; overflow:hidden;text-overflow: ellipsis;text-align:left;" v-if="node.data.islabel">
                <el-tooltip class="item "  effect="light" :content="node.data.tableNameCn" placement="top-start">
                  <span :title="node.text">
                    中文名:{{ node.data.tableNameCn }}
                  </span>
                </el-tooltip><br/>
                <el-tooltip class="item "  effect="light" :content="node.data.tableNameEn" placement="top-start">
                  <span >
                  英文名:{{ node.data.tableNameEn }}
                </span>
                </el-tooltip><br/>
                <el-tooltip class="item "  effect="light" :content="node.data.description" placement="top-start">
                  <span >
                    描述:{{ node.data.description }}
                  </span>
                </el-tooltip>
                
              </div>
              <div class='c-my-node' style="height:100%;line-height: 26px;border-radius: 32px;cursor: pointer;white-space: nowrap; text-overflow: ellipsis;display:flex;justify-content: center;
    align-items: center;" v-else>
                <span :title="node.text">
                  {{ node.text }}
                </span><br/>
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
              'label': '中心',
              'layoutName': 'center',
              'layoutClassName': 'seeks-layout-center',
              "distance_coefficient": 1
            },
            {
              'label': '树',
              'layoutName': 'tree',
              'layoutClassName': 'seeks-layout-center',
              'defaultNodeShape': 0,
              'defaultLineShape': 1,
              'from': 'left',
              // 通过这4个属性来调整 tree-层级距离&节点距离
              'min_per_width': undefined,
              'max_per_width': '400',
              'min_per_height': '150',
              'max_per_height': undefined,
              'levelDistance': '' // 如果此选项有值，则优先级高于上面那4个选项
            },
             {
            'label': '数树',
            'layoutName': 'tree',
            'layoutClassName': 'seeks-layout-center',
            'defaultJunctionPoint': 'border',
            'defaultNodeShape': 0,
            'defaultLineShape': 1,
            'min_per_width': 500,
            'max_per_width': 600,
            'min_per_height': 100
          }

          ],
          
          // 这里可以参考"Graph 图谱"中的参数进行设置
        }
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
      showSeeksGraph(query) {
        var _graphSetting = this.$refs.seeksRelationGraph.graphSetting

        var data={
	"code": 200,
	"data": {
		"node": [{
			"description": "验收单",
			"id": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"namespace": "PRJ_QH_APP_SZHSJ2_PRD",
			"tableNameCn": "验收单",
			"tableNameEn": "QRYG_W_ECP_RECEIPT_ISSUED",
			"type": 4
		}, {
			"description": "货物交接单，包含货物交接单号，发货通知单号等属性，履约货物交接单明细，履约货物交接单维护",
			"id": "2_cea898fe71d242b8a2ba50c3a37df93b",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "货物交接单，包含货物交接单号，发货通知单号等属性，履约货物交接单明细，履约货物交接单维护",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_HQ_PERF_HANDOVER",
			"type": 3
		}, {
			"description": "货物交接单，包含货物交接单号，发货通知单号等属性，履约货物交接单明细，履约货物交接单维护",
			"id": "2_9a99e88abe544299a0a05af9652d1352",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "货物交接单，包含货物交接单号，发货通知单号等属性，履约货物交接单明细，履约货物交接单维护",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_HQ_PERF_HANDOVER",
			"type": 2
		}, {
			"description": "1）定义：描述合同业务部分的基本信息，中标结果下发后，合同经办人根据中标结果生成合同草稿，维护合同买卖双方信息，并进行合同起草，审核相关业务，供应商可对起草的合同进行确认，拒绝等操作，审核后进行合同生效操作。2）业务用途：为业务环节提供合同基本信息，将合同的草稿，起草，确认，审批核生效几个业务环节归入合同签订的范畴，进行统一业务管理和操作。3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：B_CON ",
			"id": "2_b6d6f1aaf1584c05995ece386fcffc38",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "1）定义：描述合同业务部分的基本信息，中标结果下发后，合同经办人根据中标结果生成合同草稿，维护合同买卖双方信息，并进行合同起草，审核相关业务，供应商可对起草的合同进行确认，拒绝等操作，审核后进行合同生效操作。2）业务用途：为业务环节提供合同基本信息，将合同的草稿，起草，确认，审批核生效几个业务环节归入合同签订的范畴，进行统一业务管理和操作。3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：B_CON ",
			"tableNameEn": "DWD_MAT_PURCONINFO",
			"type": 3
		}, {
			"description": "1）定义：描述合同业务部分的基本信息，中标结果下发后，合同经办人根据中标结果生成合同草稿，维护合同买卖双方信息，并进行合同起草，审核相关业务，供应商可对起草的合同进行确认，拒绝等操作，审核后进行合同生效操作。2）业务用途：为业务环节提供合同基本信息，将合同的草稿，起草，确认，审批核生效几个业务环节归入合同签订的范畴，进行统一业务管理和操作。3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：B_CON ",
			"id": "2_1edec2fc7f5244008c76ef63f60c4690",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "1）定义：描述合同业务部分的基本信息，中标结果下发后，合同经办人根据中标结果生成合同草稿，维护合同买卖双方信息，并进行合同起草，审核相关业务，供应商可对起草的合同进行确认，拒绝等操作，审核后进行合同生效操作。2）业务用途：为业务环节提供合同基本信息，将合同的草稿，起草，确认，审批核生效几个业务环节归入合同签订的范畴，进行统一业务管理和操作。3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：B_CON ",
			"tableNameEn": "DWD_UEP_MAT_PURCONINFO",
			"type": 2
		}, {
			"description": "合同货物验收单",
			"id": "2_d364467c9dee485380a5b88b28664c84",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "合同货物验收单",
			"tableNameEn": "DWD_MAT_ARRIVALACCEPCHECK",
			"type": 3
		}, {
			"description": "",
			"id": "2_4ab9b696051d4768b3851643988febc1",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_ARRIVALACCEPCHECK",
			"type": 2
		}, {
			"description": "发货通知单主表",
			"id": "2_25541737863a4f57ab8e76785d41cad8",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "发货通知单主表",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_ECP_CONPERF_DNOTICE",
			"type": 3
		}, {
			"description": "发货通知单主表",
			"id": "2_2d127302283243dc9e82ce2d04c80061",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "发货通知单主表",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_ECP_CONPERF_DNOTICE",
			"type": 2
		}, {
			"description": "合同物料项",
			"id": "2_de37f04355a141e4810c6be1546dfca9",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "合同物料项",
			"tableNameEn": "DWD_MAT_CONMATITEM",
			"type": 3
		}, {
			"description": "",
			"id": "2_10205343a24246fc982d3595b0a4e8bb",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_CONMATITEM",
			"type": 2
		}, {
			"description": "",
			"id": "2_508c8396b137451490fb20af6b35e8de",
			"namespace": "PRJ_QH_APP_SZHSJ2_PRD",
			"tableNameCn": "",
			"tableNameEn": "QRYG_W_ECP_YM_ORG",
			"type": 4
		}, {
			"description": "区域分标表，区域申报、网上招投标、评标系统３个系统公用表，包含批次，分标名称，分标编号等信息，批次经理分标时生成，供后续招评标过程使用。",
			"id": "2_62129a948c094e308f0e715e102c9d58",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "区域分标表，区域申报、网上招投标、评标系统３个系统公用表，包含批次，分标名称，分标编号等信息，批次经理分标时生成，供后续招评标过程使用。",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_LA_OBJECT",
			"type": 3
		}, {
			"description": "区域分标表，区域申报、网上招投标、评标系统３个系统公用表，包含批次，分标名称，分标编号等信息，批次经理分标时生成，供后续招评标过程使用。",
			"id": "2_e87b355e5d284d54981c1788502267ce",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "区域分标表，区域申报、网上招投标、评标系统３个系统公用表，包含批次，分标名称，分标编号等信息，批次经理分标时生成，供后续招评标过程使用。",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_LA_OBJECT",
			"type": 2
		}, {
			"description": "计划采购区域关联",
			"id": "2_30a4a36bf7954327a0cbe0c52000b64a",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "计划采购区域关联",
			"tableNameEn": "DWD_MAT_PURPLANPRJRLT",
			"type": 3
		}, {
			"description": "",
			"id": "2_6234e90b205746a48f7dac2027f07f0f",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_PURPLANPRJRLT",
			"type": 2
		}, {
			"description": "1）定义：采购批次计划。2）业务用途：用于记录采购批次计划等信息。3）责任部门：物资部。4）所属域：物资域。5）来源系统：ECP。6）来源表：b_purplan。",
			"id": "2_ee770b3934144366aecf66a612b7fd8d",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "1）定义：采购批次计划。2）业务用途：用于记录采购批次计划等信息。3）责任部门：物资部。4）所属域：物资域。5）来源系统：ECP。6）来源表：b_purplan。",
			"tableNameEn": "DWD_MAT_PURBATCHPLAN",
			"type": 3
		}, {
			"description": "1）定义：采购批次计划。2）业务用途：用于记录采购批次计划等信息。3）责任部门：物资部。4）所属域：物资域。5）来源系统：ECP。6）来源表：b_purplan。",
			"id": "2_0dee2645857b473295f8e3d21373429c",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "1）定义：采购批次计划。2）业务用途：用于记录采购批次计划等信息。3）责任部门：物资部。4）所属域：物资域。5）来源系统：ECP。6）来源表：b_purplan。",
			"tableNameEn": "DWD_UEP_MAT_PURBATCHPLAN",
			"type": 2
		}, {
			"description": "活动公告",
			"id": "2_304c13838e2a4d7d8e8837bccc3a84e6",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "活动公告",
			"tableNameEn": "DWD_MAT_INVTENDANNOUNINFO",
			"type": 3
		}, {
			"description": "活动公告",
			"id": "2_5257376f8f5b452697b28cf8e9f9859e",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "活动公告",
			"tableNameEn": "STD_ECP2_PRCLPDB_PUR_ADM_B_ONLINE_BID_NOTICE",
			"type": 3
		}, {
			"description": "",
			"id": "2_ea08f2af99ba48adaedb032212b42d04",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DIS_UEP_ECP2_PRCLPDB_PUR_ADM_B_ONLINE_BID_NOTICE",
			"type": 2
		}, {
			"description": "",
			"id": "2_b7fcd7467e7d4978a044543ca2df5bc0",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_INVTENDANNOUNINFO",
			"type": 2
		}, {
			"description": "活动计划详细信息，包含计划名称，编号，活动信息等，erp上报物资时，存入批次信息，后续活动过程都是跟着批次进行运转",
			"id": "2_a8d52d78b4754ad195344c221152bd15",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "活动计划详细信息，包含计划名称，编号，活动信息等，erp上报物资时，存入批次信息，后续活动过程都是跟着批次进行运转",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_LA_PLAN",
			"type": 3
		}, {
			"description": "活动计划详细信息，包含计划名称，编号，活动信息等，erp上报物资时，存入批次信息，后续活动过程都是跟着批次进行运转",
			"id": "2_a34ffad968bf43ccb1b2000c71cfaf60",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "活动计划详细信息，包含计划名称，编号，活动信息等，erp上报物资时，存入批次信息，后续活动过程都是跟着批次进行运转",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_LA_PLAN",
			"type": 2
		}, {
			"description": "活动代理机构依据活动法以及活动要求，在活动阶段用发布活动公告，用于保存活动公告的信息，包括活动代理机构信息，购买活动文件时间等属性，用于发布活动公告。",
			"id": "2_55ff9ed891ca46c198d06a663e545fb3",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "活动代理机构依据活动法以及活动要求，在活动阶段用发布活动公告，用于保存活动公告的信息，包括活动代理机构信息，购买活动文件时间等属性，用于发布活动公告。",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_BID_CIRCUIT_STRUCT",
			"type": 3
		}, {
			"description": "活动代理机构依据活动法以及活动要求，在活动阶段用发布活动公告，用于保存活动公告的信息，包括活动代理机构信息，购买活动文件时间等属性，用于发布活动公告。",
			"id": "2_2c661b319e3f458b8a857a9eeea0dc23",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "活动代理机构依据活动法以及活动要求，在活动阶段用发布活动公告，用于保存活动公告的信息，包括活动代理机构信息，购买活动文件时间等属性，用于发布活动公告。",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_BID_CIRCUIT_STRUCT",
			"type": 2
		}, {
			"description": "采购区域",
			"id": "2_2f21b1efbdaf4f8cb1418562a235a992",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "采购区域",
			"tableNameEn": "DWD_MAT_PURPRO",
			"type": 3
		}, {
			"description": "",
			"id": "2_9d0dd74862bd45e8a1bf994c19bc6781",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_PURPRO",
			"type": 2
		}, {
			"description": "组织机构",
			"id": "2_d213eb8b96df4cde9267c3af22bdb870",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "组织机构",
			"tableNameEn": "DWD_MAT_ORG",
			"type": 3
		}, {
			"description": "",
			"id": "2_f7c47280370b4b3f9d03f7266289625d",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_ORG",
			"type": 2
		}, {
			"description": "1）定义：采购分包是将分标划分为几个部分，并将具体的采购申请添加至包内2）业务用途：供应商投标及中标也是以分包为维度投标及中标，系统默认根据维护的分包数量，各个分包的包名为包+流水号，按照流水号排序3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：b_bidpkg",
			"id": "2_bf8f80653e1d483bac30cb5a3d7d9361",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "1）定义：采购分包是将分标划分为几个部分，并将具体的采购申请添加至包内2）业务用途：供应商投标及中标也是以分包为维度投标及中标，系统默认根据维护的分包数量，各个分包的包名为包+流水号，按照流水号排序3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：b_bidpkg",
			"tableNameEn": "DWD_MAT_BIDPKG",
			"type": 3
		}, {
			"description": "1）定义：采购分包是将分标划分为几个部分，并将具体的采购申请添加至包内2）业务用途：供应商投标及中标也是以分包为维度投标及中标，系统默认根据维护的分包数量，各个分包的包名为包+流水号，按照流水号排序3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：b_bidpkg",
			"id": "2_892c1b72e15d4c0abecbda6ab9dc42a8",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "1）定义：采购分包是将分标划分为几个部分，并将具体的采购申请添加至包内2）业务用途：供应商投标及中标也是以分包为维度投标及中标，系统默认根据维护的分包数量，各个分包的包名为包+流水号，按照流水号排序3）责任部门：物资部4）所属域：物资域5）来源系统：ECP6）来源表：b_bidpkg",
			"tableNameEn": "DWD_UEP_MAT_BIDPKG",
			"type": 2
		}, {
			"description": "分标",
			"id": "2_9adacff6548e4e3f84a7f8ff24a75de0",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "分标",
			"tableNameEn": "DWD_MAT_SUBBID",
			"type": 3
		}, {
			"description": "",
			"id": "2_7107f9327a9342dc8811bcf95469f99f",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_SUBBID",
			"type": 2
		}, {
			"description": "包括机构编号、机构名称等属性，用于记录组织信息",
			"id": "2_25c9f2a715c54d20896dec399642d359",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "包括机构编号、机构名称等属性，用于记录组织信息",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_PUB_ORGAN",
			"type": 3
		}, {
			"description": "包括机构编号、机构名称等属性，用于记录组织信息",
			"id": "2_b2d1b859e5b94d838c7cf758f72cb44f",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "包括机构编号、机构名称等属性，用于记录组织信息",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_PUB_ORGAN",
			"type": 2
		}, {
			"description": "区域分包表:区域申报、网上招投标、评标系统公用表，包含分包名称编号等，区域经理分包时生成，在招投评标过程中使用",
			"id": "2_4fd377a3fffa46d9b1747eea53dd5bfa",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "区域分包表:区域申报、网上招投标、评标系统公用表，包含分包名称编号等，区域经理分包时生成，在招投评标过程中使用",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_LA_PACKAGE",
			"type": 3
		}, {
			"description": "区域分包表:区域申报、网上招投标、评标系统公用表，包含分包名称编号等，区域经理分包时生成，在招投评标过程中使用",
			"id": "2_8f265212335846b1b930d84548b02302",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "区域分包表:区域申报、网上招投标、评标系统公用表，包含分包名称编号等，区域经理分包时生成，在招投评标过程中使用",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_LA_PACKAGE",
			"type": 2
		}, {
			"description": "合同货物验收明细",
			"id": "2_ae623970b7a94ff88aa0f0fc5eed062d",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "合同货物验收明细",
			"tableNameEn": "DWD_MAT_ARRIVALACCEPCHECKDET",
			"type": 3
		}, {
			"description": "",
			"id": "2_17fb0894ed6a4299a9c229df1216b070",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "",
			"tableNameEn": "DWD_UEP_MAT_ARRIVALACCEPCHECKDET",
			"type": 2
		}, {
			"description": "货物验收单，包括验收单ID，发货通知编号和验收信息等，到货验收单维护时产生，到货验收单查询时使用",
			"id": "2_4a3301bcaa554f178096366a6e7c7239",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "货物验收单，包括验收单ID，发货通知编号和验收信息等，到货验收单维护时产生，到货验收单查询时使用",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_HQ_PERF_RECEIVE",
			"type": 3
		}, {
			"description": "货物验收单，包括验收单ID，发货通知编号和验收信息等，到货验收单维护时产生，到货验收单查询时使用",
			"id": "2_bb4b52d7afa0480a8ab4c1924a9d6bcd",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "货物验收单，包括验收单ID，发货通知编号和验收信息等，到货验收单维护时产生，到货验收单查询时使用",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_HQ_PERF_RECEIVE",
			"type": 2
		}, {
			"description": "主合约信息表，包含合同标识符，合同类型等属性， 封装页面报表数据",
			"id": "2_2057ced0fc4941be8adc03019172d442",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "主合约信息表，包含合同标识符，合同类型等属性， 封装页面报表数据",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_ECP_CONTRACT",
			"type": 3
		}, {
			"description": "主合约信息表，包含合同标识符，合同类型等属性， 封装页面报表数据",
			"id": "2_debbbf11c4f646a4b9c88ad8be0753d3",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "主合约信息表，包含合同标识符，合同类型等属性， 封装页面报表数据",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_ECP_CONTRACT",
			"type": 2
		}, {
			"description": "发货通知明细项，发货通知单，发货通知单编号、供应计划状态、采购订单编号等属性，供应计划生成后即可生成对应发货通知，用于发货阶段执行。此表为发货通知行，跟供应计划一对一",
			"id": "2_bbdf7534951847c9b4955e00fd607e00",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "发货通知明细项，发货通知单，发货通知单编号、供应计划状态、采购订单编号等属性，供应计划生成后即可生成对应发货通知，用于发货阶段执行。此表为发货通知行，跟供应计划一对一",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_ECP_CONPERF_DNOTICE_LINE",
			"type": 3
		}, {
			"description": "发货通知明细项，发货通知单，发货通知单编号、供应计划状态、采购订单编号等属性，供应计划生成后即可生成对应发货通知，用于发货阶段执行。此表为发货通知行，跟供应计划一对一",
			"id": "2_fa5dd527f6ff4d85851f17aa538cd01d",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "发货通知明细项，发货通知单，发货通知单编号、供应计划状态、采购订单编号等属性，供应计划生成后即可生成对应发货通知，用于发货阶段执行。此表为发货通知行，跟供应计划一对一",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_ECP_CONPERF_DNOTICE_LINE",
			"type": 2
		}, {
			"description": "供应计划行信息表，包括供应计划号、采购订单号、和物料等信息，供应计划生成时产生和合同履约时使用。",
			"id": "2_001f0313de3447e098f0f56f76489e8f",
			"namespace": "PRJ_QH_DWD_PRD",
			"tableNameCn": "供应计划行信息表，包括供应计划号、采购订单号、和物料等信息，供应计划生成时产生和合同履约时使用。",
			"tableNameEn": "STD_ECP1_EBIZ_BIDPRO_V_ECP_CONPERF_PURCHASE_LINE",
			"type": 3
		}, {
			"description": "供应计划行信息表，包括供应计划号、采购订单号、和物料等信息，供应计划生成时产生和合同履约时使用。",
			"id": "2_bcb0c90e4a1a4e2a8cefb51cc990a2a3",
			"namespace": "PRJ_QH_ODS_UEP_PRD",
			"tableNameCn": "供应计划行信息表，包括供应计划号、采购订单号、和物料等信息，供应计划生成时产生和合同履约时使用。",
			"tableNameEn": "DIS_UEP_ECP1_EBIZ_BIDPRO_V_ECP_CONPERF_PURCHASE_LINE",
			"type": 2
		}],
		"relationship": [{
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_cea898fe71d242b8a2ba50c3a37df93b"
		}, {
			"endNodeId": "2_cea898fe71d242b8a2ba50c3a37df93b",
			"startNodeId": "2_9a99e88abe544299a0a05af9652d1352"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_b6d6f1aaf1584c05995ece386fcffc38"
		}, {
			"endNodeId": "2_b6d6f1aaf1584c05995ece386fcffc38",
			"startNodeId": "2_1edec2fc7f5244008c76ef63f60c4690"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_d364467c9dee485380a5b88b28664c84"
		}, {
			"endNodeId": "2_d364467c9dee485380a5b88b28664c84",
			"startNodeId": "2_4ab9b696051d4768b3851643988febc1"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_25541737863a4f57ab8e76785d41cad8"
		}, {
			"endNodeId": "2_25541737863a4f57ab8e76785d41cad8",
			"startNodeId": "2_2d127302283243dc9e82ce2d04c80061"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_de37f04355a141e4810c6be1546dfca9"
		}, {
			"endNodeId": "2_de37f04355a141e4810c6be1546dfca9",
			"startNodeId": "2_10205343a24246fc982d3595b0a4e8bb"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_508c8396b137451490fb20af6b35e8de"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_62129a948c094e308f0e715e102c9d58"
		}, {
			"endNodeId": "2_62129a948c094e308f0e715e102c9d58",
			"startNodeId": "2_e87b355e5d284d54981c1788502267ce"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_30a4a36bf7954327a0cbe0c52000b64a"
		}, {
			"endNodeId": "2_30a4a36bf7954327a0cbe0c52000b64a",
			"startNodeId": "2_6234e90b205746a48f7dac2027f07f0f"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_ee770b3934144366aecf66a612b7fd8d"
		}, {
			"endNodeId": "2_ee770b3934144366aecf66a612b7fd8d",
			"startNodeId": "2_0dee2645857b473295f8e3d21373429c"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_304c13838e2a4d7d8e8837bccc3a84e6"
		}, {
			"endNodeId": "2_304c13838e2a4d7d8e8837bccc3a84e6",
			"startNodeId": "2_5257376f8f5b452697b28cf8e9f9859e"
		}, {
			"endNodeId": "2_5257376f8f5b452697b28cf8e9f9859e",
			"startNodeId": "2_ea08f2af99ba48adaedb032212b42d04"
		}, {
			"endNodeId": "2_304c13838e2a4d7d8e8837bccc3a84e6",
			"startNodeId": "2_b7fcd7467e7d4978a044543ca2df5bc0"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_a8d52d78b4754ad195344c221152bd15"
		}, {
			"endNodeId": "2_a8d52d78b4754ad195344c221152bd15",
			"startNodeId": "2_a34ffad968bf43ccb1b2000c71cfaf60"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_55ff9ed891ca46c198d06a663e545fb3"
		}, {
			"endNodeId": "2_55ff9ed891ca46c198d06a663e545fb3",
			"startNodeId": "2_2c661b319e3f458b8a857a9eeea0dc23"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_2f21b1efbdaf4f8cb1418562a235a992"
		}, {
			"endNodeId": "2_2f21b1efbdaf4f8cb1418562a235a992",
			"startNodeId": "2_9d0dd74862bd45e8a1bf994c19bc6781"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_d213eb8b96df4cde9267c3af22bdb870"
		}, {
			"endNodeId": "2_d213eb8b96df4cde9267c3af22bdb870",
			"startNodeId": "2_f7c47280370b4b3f9d03f7266289625d"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_bf8f80653e1d483bac30cb5a3d7d9361"
		}, {
			"endNodeId": "2_bf8f80653e1d483bac30cb5a3d7d9361",
			"startNodeId": "2_892c1b72e15d4c0abecbda6ab9dc42a8"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_9adacff6548e4e3f84a7f8ff24a75de0"
		}, {
			"endNodeId": "2_9adacff6548e4e3f84a7f8ff24a75de0",
			"startNodeId": "2_7107f9327a9342dc8811bcf95469f99f"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_25c9f2a715c54d20896dec399642d359"
		}, {
			"endNodeId": "2_25c9f2a715c54d20896dec399642d359",
			"startNodeId": "2_b2d1b859e5b94d838c7cf758f72cb44f"
		}, {
			"endNodeId": "2_508c8396b137451490fb20af6b35e8de",
			"startNodeId": "2_4fd377a3fffa46d9b1747eea53dd5bfa"
		}, {
			"endNodeId": "2_4fd377a3fffa46d9b1747eea53dd5bfa",
			"startNodeId": "2_8f265212335846b1b930d84548b02302"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_ae623970b7a94ff88aa0f0fc5eed062d"
		}, {
			"endNodeId": "2_ae623970b7a94ff88aa0f0fc5eed062d",
			"startNodeId": "2_17fb0894ed6a4299a9c229df1216b070"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_4a3301bcaa554f178096366a6e7c7239"
		}, {
			"endNodeId": "2_4a3301bcaa554f178096366a6e7c7239",
			"startNodeId": "2_bb4b52d7afa0480a8ab4c1924a9d6bcd"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_2057ced0fc4941be8adc03019172d442"
		}, {
			"endNodeId": "2_2057ced0fc4941be8adc03019172d442",
			"startNodeId": "2_debbbf11c4f646a4b9c88ad8be0753d3"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_bbdf7534951847c9b4955e00fd607e00"
		}, {
			"endNodeId": "2_bbdf7534951847c9b4955e00fd607e00",
			"startNodeId": "2_fa5dd527f6ff4d85851f17aa538cd01d"
		}, {
			"endNodeId": "2_e91dfc1a04ba4f3fafbf468311d6df6f",
			"startNodeId": "2_001f0313de3447e098f0f56f76489e8f"
		}, {
			"endNodeId": "2_001f0313de3447e098f0f56f76489e8f",
			"startNodeId": "2_bcb0c90e4a1a4e2a8cefb51cc990a2a3"
		}]
	},
	"msg": "OK",
	"resultCode": "",
	"success": true
        }
        var __graph_json_data = {
          rootId: 'a',
          nodes: [
            { id: 'a', text: '数据', borderColor: 'yellow'},
            { id: 'b', text: '贴源层', borderColor: 'yellow' },
            { id: 'c', text: '共享层', borderColor: 'yellow' },
            { id: 'd', text: '分析层', borderColor: 'yellow' }
          ],
          links: [{"from": "a","to": "b"},
          {"from": "a","to": "c"},
          {"from": "a","to": "d"},]
        }
        data.data.node.forEach(v=>{
          console.log(v)
          v['width']='400'
          v['nodeShape']=1
          v['data']={
            "description": v.description,
            "id": v.id,
            "namespace": v.namespace,
            "tableNameCn": v.tableNameCn,
            "tableNameEn": v.tableNameEn,
            "type": v.type,
            "islabel":true
          }
          if(v.type==4){
              v['color']='blue'
             __graph_json_data.links.push(
               {"from":'d',"to":v.id}
             )
          }else if(v.type==3){
              v['color']='pink'
            __graph_json_data.links.push(
               {"from":'c',"to":v.id}
             )
          }else if(v.type==2){
            v['color']='green'
            __graph_json_data.links.push(
               {"from":'b',"to":v.id}
             )
          }
          
          __graph_json_data.nodes.push(v)
        })
        console.log(data)
      
        // __graph_json_data.links.push(data.data.node)
        console.log(__graph_json_data)

        this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
          // Called when the relation-graph is completed 
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
  .rel-node-peel{
    font-size:12px;
  }
</style>
