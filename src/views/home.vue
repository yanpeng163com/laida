<template>
    <div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="90%">
                    <el-tabs type="card">
                        <el-tab-pane label="用户管理">
                            <div class="contentBody" style='padding:20px;'  ref="addAlert">
                                <el-input  style="width:200px;height:50px;padding:5px" />
                                <el-button type="primary" style='background-color:#FBFFB3;color:#000;padding: 7px 20px;'>搜索</el-button>
                                <el-table :data="tableData" element-loading-text="Loading"
                                :cell-style="{ textAlign: 'center' }" :header-cell-style="{textAlign: 'center'}" border fit 
                                highlight-current-row>
                                    <el-table-column align="center"  width="50" >
                                        <template slot-scope="scope">
                                        {{ scope.$index+1 }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="源端表英文名" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <router-link :to="{ path: '/table', query: { id: scope.row.sourceTableId,type:1 }}"
                                            style="color:#66b1ff">{{ scope.row.sourceTableNameEn }}</router-link>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="源端表中文名"  :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <span>{{ scope.row.sourceTableNameCn }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="源端表描述"  :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <span>{{ scope.row.sourceTableDescription }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="中台表ID" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        {{ scope.row.sharedTableId }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="中台表英文名" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <router-link :to="{ path: '/table', query: { id: scope.row.sharedTableId,type:2 }}"
                                            style="color:#66b1ff">{{ scope.row.sharedTableNameEn }}</router-link>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="中台表中文名" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        {{ scope.row.sharedTableNameCn }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="中台表描述" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <span>{{ scope.row.sharedTableDescription }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="是否接入中台" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        {{ scope.row.isZt ? "是":"否" }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="是否是负面清单" :render-header="renderHeader" show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        {{ scope.row.isSensitiveInfo ? "是":"否" }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="操作">
                                        <template slot-scope="scope">
                                        <el-button type="text" size="mini" @click="apply(scope.row.sharedTableId)">申请</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div class="footer" style='width:100%;height:40px;  '></div>
                        </el-tab-pane>
                        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                    </el-tabs>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible: true,
        tableData:[{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },{
                        "sourceTableId": 66,
                        "sourceTableNameEn": "source_table_name",
                        "sourceTableNameCn": "源端表中文名",
                        "sourceTableDescription": "源端表描述",
                        "sharedTableId": "id",
                        "sharedTableNameEn": "shared_table_name",
                        "sharedTableNameCn": "中台表中文名",
                        "sharedTableDescription": "中台表描述",
                        "isZt": true,
                        "isSensitiveInfo": true,
                        "isCollect": true
                    },],
        tableData2:[],
      };
    },
    mounted() {
        console.log(this.tableData.length)
        setTimeout(()=>{
            console.log(this.$refs.addAlert.offsetHeight)
        },1000)
    },
    methods: {
        renderHeader(h,data){
            console.log(data)
            return h('span',[
                h('el-tooltip',{
                    attrs:{
                        class:'item',
                        effect:'dark',
                        content:data.column.label,
                        placement:'top',
                    }
                },[
                    h('span',data.column.label)
                ])
            ])
        },
    },
}
</script>
<style >
/deep/.item{
    width:100px;
}
   .el-tabs--card {
    padding: 10px 20px 20px;
    /*background:url('../assets/content_1.png');*/
    background-size: 100% 100%;
  }
  .el-tabs--card>.el-tabs__header{
      border-bottom:none;
      background:url('../assets/h_1.png');
      background-size: 100% 100%;
      margin:0;
  }
  .el-tabs__item.is-active {
    background: url('../assets/selected.png');
    background-size: 100% 100%;
    color: #00E4FF;

  }
  .contentBody{
    background:url('../assets/center.png');
    background-size: 100% 100%;
  }
  .footer{
      background:url('../assets/footer.png');
    background-size: 100% 100%;
  }
  .el-tabs__nav-scroll {
    overflow: hidden;
    position: relative;
    left: 12%;
}
    .el-table{
        color:#000;
    }
    /deep/.el-table, .el-table tr, .el-table td, .el-table th {
        background-color: #0E1337 !important;
    }
    .el-table .cell{
        white-space:pre !important
    }
</style>