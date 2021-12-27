<template>
  <div>
    <div id="table">
      <el-table :data="tabledata01" :span-method="tableSpanMethod" max-height="420">
        <el-table-column v-for='item in tableConfig' :label="item.label" :prop='item.prop' :width='item.width'
          :key="item.id">
          <el-table-column v-if='item.children||item.children.length>0' v-for="item1 in item.children"
            :label="item1.label" :prop='item1.prop' :width='item1.width' :key="item1.id">
            <el-table-column v-if='item1.children||item1.children.length>0' v-for="item2 in item1.children"
              :label="item2.label" :prop='item2.prop' :width='item2.width' :key="item2.id">
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableConfig: [{
            id: 100,
            label: '一级表头',
            prop: '',
            width: '',
            children: [{
                id: 110,
                label: '二级表头1',
                prop: 'districtName',
                width: ''
              },
              {
                id: 120,
                label: '二级表头2',
                prop: 'timeDimension',
                width: ''
              }
            ]
          },
          {
            id: 200,
            label: '一级表头',
            prop: '',
            width: '',
            children: [{
              id: 210,
              label: '二级表头',
              prop: '',
              width: '',
              children: [{
                  id: 211,
                  label: '三级表头',
                  prop: 'residentPopNum',
                  width: '110'
                },
                {
                  id: 212,
                  label: '三级表头',
                  prop: 'residentPopDst',
                  width: '110'
                }
              ]
            }]
          },
          {
            id: 300,
            label: '一级表头',
            prop: '',
            width: '',
            children: [{
                id: 310,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 311,
                    label: '三级表头',
                    prop: 'liveLandArea',
                    width: '110'
                  },
                  {
                    id: 312,
                    label: '三级表头',
                    prop: 'liveLandDst',
                    width: '110'
                  }
                ],
              },
              {
                id: 320,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 321,
                    label: '三级表头(km²)',
                    prop: 'employmentLandArea',
                    width: '110'
                  },
                  {
                    id: 322,
                    label: '三级表头',
                    prop: 'employmentLandDst',
                    width: '110'
                  }
                ],
              }
            ]
          },
          {
            id: 400,
            label: '一级表头',
            prop: '',
            width: '',
            children: [{
                id: 410,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 411,
                    label: '三级表头(个)',
                    prop: 'regionTrafficHubNum',
                    width: '110'
                  },
                  {
                    id: 412,
                    label: '三级表头(人次/km²)',
                    prop: 'regionTrafficHubFlow',
                    width: '140'
                  }
                ],
              },
              {
                id: 420,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 421,
                    label: '三级表头(个)',
                    prop: 'highSpeedNum',
                    width: '110'
                  },
                  {
                    id: 422,
                    label: '三级表头(个/km²)',
                    prop: 'highSpeedDst',
                    width: '140'
                  }
                ],
              }, {
                id: 430,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 431,
                    label: '三级表头(个)',
                    prop: 'trackTrafficSpotNum',
                    width: '140'
                  },
                  {
                    id: 432,
                    label: '三级表头(个/km²)',
                    prop: 'trackTrafficSpotDst',
                    width: '140'
                  }
                ],
              },
              {
                id: 440,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 441,
                    label: '三级表头(km)',
                    prop: 'trackTrafficNetNum',
                    width: '110'
                  },
                  {
                    id: 442,
                    label: '三级表头(km/km²)',
                    prop: 'trackTrafficNetDst',
                    width: '140'
                  }
                ],
              },
              {
                id: 450,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 451,
                    label: '三级表头(个)',
                    prop: 'cityTrafficHubNum',
                    width: '110'
                  },
                  {
                    id: 452,
                    label: '三级表头(个/km²)',
                    prop: 'cityTrafficHubDst',
                    width: '110'
                  },
                  {
                    id: 453,
                    label: '三级表头(人次/km²)',
                    prop: 'cityTrafficHubFlow',
                    width: '140'
                  }
                ],
              },
              {
                id: 460,
                label: '二级表头',
                prop: '',
                width: '',
                children: [{
                    id: 461,
                    label: '三级表头(km)',
                    prop: 'cityTrafficNetNum',
                    width: '110'
                  },
                  {
                    id: 462,
                    label: '三级表头',
                    prop: 'cityTrafficNetDst',
                    width: '140'
                  }
                ],
              },
            ]
          },
        ],
      }
    },
  }

</script>
